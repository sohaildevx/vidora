"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import { ShowToast } from '@/components/toast';
import { Video } from '@/types';
import { Download, Clapperboard } from 'lucide-react';

const ReelGeneratorPage = () => {

  const [videos, setVideos] = useState<Video[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [reelUrl, setReelUrl] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get('/api/video');
      if (Array.isArray(response.data)) {
        setVideos(response.data);
      }
    } catch (error) {
      ShowToast('Failed to load videos', 'error');
    } finally {
      setLoadingVideos(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const selectedVideo = videos.find(v => v.id === selectedVideoId);

  const handleGenerateReel = async () => {
    if (!selectedVideo) {
      ShowToast('Please select a video first', 'error');
      return;
    }

    setIsGenerating(true);
    setReelUrl(null);

    try {
      const response = await axios.post('/api/reel-generator', {
        videoId: selectedVideo.id,
        publicId: selectedVideo.publicId,
      });

      if (response.data.success) {
        setReelUrl(response.data.reelUrl);
        ShowToast('Reel generated successfully!', 'success');
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) && error.response?.data?.error
        ? error.response.data.error
        : 'Failed to generate reel. Please try again.';
      ShowToast(errorMessage, 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Reel Generator</h1>
        <p className="text-sm sm:text-base text-base-content/70">
          AI picks the most engaging part of your video and turns it into a 9:16 short
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4 sm:p-6 lg:p-8 space-y-6">

          
          <div>
            <label className="label">
              <span className="label-text font-semibold">Select a Video</span>
            </label>
            {loadingVideos ? (
              <div className="flex items-center gap-2 text-sm text-base-content/60">
                <span className="loading loading-spinner loading-sm"></span>
                Loading your videos...
              </div>
            ) : videos.length === 0 ? (
              <p className="text-sm text-base-content/60">
                No videos found. <a href="/video-upload" className="link link-primary">Upload one first.</a>
              </p>
            ) : (
              <select
                className="select select-bordered w-full"
                value={selectedVideoId}
                onChange={(e) => {
                  setSelectedVideoId(e.target.value);
                  setReelUrl(null);
                }}
              >
                <option value="" disabled>— Choose a video —</option>
                {videos.map((video) => (
                  <option key={video.id} value={video.id}>
                    {video.title} ({Math.floor(Number(video.duration) / 60)}:{String(Math.round(Number(video.duration) % 60)).padStart(2, '0')})
                  </option>
                ))}
              </select>
            )}
          </div>

          
          {selectedVideo && (
            <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
              <Clapperboard size={20} className="text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{selectedVideo.title}</p>
                {selectedVideo.description && (
                  <p className="text-xs text-base-content/60 truncate">{selectedVideo.description}</p>
                )}
              </div>
            </div>
          )}

          
          <button
            className="btn btn-primary w-full sm:w-auto sm:btn-wide"
            onClick={handleGenerateReel}
            disabled={!selectedVideoId || isGenerating || loadingVideos}
          >
            {isGenerating ? (
              <>
                <span className="loading loading-spinner"></span>
                Generating Reel...
              </>
            ) : (
              <>
                <Clapperboard size={18} />
                Generate Reel
              </>
            )}
          </button>

          {isGenerating && (
            <p className="text-xs text-base-content/50">
              This may take 30–60 seconds. AI is transcribing and picking the best segment...
            </p>
          )}

          
          {reelUrl && (
            <div ref={resultRef} className="space-y-4 pt-4 border-t border-base-300">
              <h2 className="font-bold text-lg">Your Reel is Ready!</h2>
              <div className="flex justify-center">
                <video
                  src={reelUrl}
                  controls
                  className="rounded-xl max-h-[500px] w-auto"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
              <a
                href={reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-full sm:w-auto sm:btn-wide"
              >
                <Download size={18} />
                Download Reel
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReelGeneratorPage;
