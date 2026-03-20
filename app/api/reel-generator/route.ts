import { NextRequest, NextResponse } from "next/server";
import openai from "@/utils/openai";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  
    try {
      const { userId } = await auth();
      
      if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
  
      const { videoId, publicId } = await request.json();
  
      if (!videoId || !publicId) {
        return NextResponse.json(
          { error: "Video ID and Public ID are required" },
          { status: 400 }
        );
      }
  
      const video = await prisma.video.findUnique({
        where: { id: videoId }
      });
  
      if (!video) {
        return NextResponse.json({ error: "Video not found" }, { status: 404 });
      }
  
      if (video.userId !== userId) {
        return NextResponse.json(
          { error: "Forbidden: You can only generate reels for your own videos" },
          { status: 403 }
        );
      }
  
      const videoUrl = cloudinary.url(publicId, {
        resource_type: "video",
        format: "mp4",
      });
  
      const videoResponse = await fetch(videoUrl);
      if (!videoResponse.ok) {
        throw new Error("Failed to fetch video from Cloudinary");
      }
  
      const videoBlob = await videoResponse.blob();
      
      const videoFile = new File([videoBlob], `${publicId}.mp4`, {
        type: "video/mp4",
      });
  
  
      const transcription = await openai.audio.transcriptions.create({
        file: videoFile,
        model: "whisper-1",
        response_format: "verbose_json",      
        timestamp_granularities: ["segment"], 
        language: "en",
      });
  
      const gptResponse = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{
          role: "user",
          content: `Here are transcript segments: ${JSON.stringify(transcription.segments)}
          Pick the single most engaging 30-45 second window.
          Return ONLY valid JSON: { "start": number, "end": number }`
        }]
      });
      const raw = gptResponse.choices[0].message.content!;
      const cleaned = raw.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      const start = Math.round(parsed.start * 10) / 10;
      const end = Math.round(parsed.end * 10) / 10;


      const result = await cloudinary.uploader.explicit(publicId, {
        type: "upload",
        resource_type: "video",
        eager: [{
          raw_transformation: `so_${start},eo_${end}/ar_9:16,c_fill,g_auto/q_auto:low,f_mp4`,
          format: "mp4"
        }],
        eager_async: false
      });

      const reelUrl = cloudinary.url(publicId, {
        resource_type: "video",
        transformation: [
          { start_offset: `${start}`, end_offset: `${end}` },
          { aspect_ratio: "9:16", crop: "fill", gravity: "auto" },
          { quality: "auto:low", fetch_format: "mp4" },
        ],
        sign_url: true,
        secure: true,
      });

      if (!reelUrl) {
        return NextResponse.json(
          { error: "Failed to get reel URL from Cloudinary." },
          { status: 500 }
        );
      }

      await prisma.video.update({
        where: { id: videoId },
        data: { reelUrl, reelPublicId: publicId, hasReel: true }
      });
      return NextResponse.json({ success: true, reelUrl });
  
      
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to generate reel" },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  }