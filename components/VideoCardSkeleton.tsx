import React from 'react'

const VideoCardSkeleton: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-xl h-full flex flex-col">
      <figure className="aspect-video">
        <div className="skeleton w-full h-full rounded-none" />
      </figure>
      <div className="card-body p-4 flex-1 flex flex-col">
        <div className="skeleton h-5 w-3/4 mb-2" />
        <div className="skeleton h-4 w-full mb-1" />
        <div className="skeleton h-4 w-2/3 mb-2" />
        <div className="skeleton h-3 w-1/3 mb-3" />
        <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-base-300">
          <div className="flex items-center gap-2">
            <div className="skeleton h-8 w-8 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="skeleton h-3 w-12 mb-1" />
              <div className="skeleton h-4 w-16" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="skeleton h-8 w-8 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <div className="skeleton h-3 w-16 mb-1" />
              <div className="skeleton h-4 w-14" />
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="skeleton h-3 w-2/5 mb-3" />
          <div className="flex gap-2">
            <div className="skeleton h-8 flex-1 rounded-btn" />
            <div className="skeleton h-8 w-8 rounded-btn" />
            <div className="skeleton h-8 w-8 rounded-btn" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardSkeleton
