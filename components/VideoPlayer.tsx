"use client";
import React, { useRef, useEffect, useState } from 'react';
import { getCldVideoUrl } from 'next-cloudinary';

interface VideoPlayerProps {
  publicId: string;
  title: string;
  subtitleUrl?: string | null;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  publicId,
  title,
  subtitleUrl,
  autoPlay = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const videoUrl = getCldVideoUrl({
    src: publicId,
    width: 1920,
    height: 1080,
  });

  
  useEffect(() => {
    if (subtitleUrl) {
      
      if (subtitleUrl.startsWith('http')) {
        setBlobUrl(subtitleUrl);
      } else {
        const blob = new Blob([subtitleUrl], { type: 'text/vtt' });
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
        
        return () => URL.revokeObjectURL(url);
      }
    }
  }, [subtitleUrl]);

  useEffect(() => {
    if (videoRef.current && blobUrl) {
      const video = videoRef.current;
      
      const handleLoadedMetadata = () => {
        const tracks = video.textTracks;
        if (tracks.length > 0) {
          tracks[0].mode = 'showing';
        }
      };
      
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, [blobUrl]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        autoPlay={autoPlay}
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src={videoUrl} type="video/mp4" />
        
        {blobUrl && (
          <track
            key={blobUrl}
            kind="subtitles"
            src={blobUrl}
            srcLang="en"
            label="English"
            default
          />
        )}
        
        Your browser does not support the video tag.
      </video>
      
      {blobUrl && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Subtitles: ON (CC button to toggle)
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
