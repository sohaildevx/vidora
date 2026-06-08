import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../lib/prisma"
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export async function DELETE(request: NextRequest) {
    try {
        const { userId } = await auth();
        
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
        }

        
        const video = await prisma.video.findUnique({
            where: { id }
        });

        if (!video) {
            return NextResponse.json({ error: 'Video not found' }, { status: 404 });
        }

        if (video.userId !== userId) {
            return NextResponse.json({ error: 'Forbidden: You can only delete your own videos' }, { status: 403 });
        }

        
        try {
            await cloudinary.uploader.destroy(video.publicId, {
                resource_type: "video"
            });
        } catch (cloudinaryError) {
            console.error("Cloudinary deletion error:", cloudinaryError);
            
        }

        
        const deletedVideo = await prisma.video.delete({
            where: { id }
        });

        return NextResponse.json({ 
            success: true, 
            message: 'Video deleted successfully',
            video: deletedVideo 
        });
    } catch (error) {
        console.error("Delete error:", error);
        return NextResponse.json({ error: 'Failed to delete video' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}