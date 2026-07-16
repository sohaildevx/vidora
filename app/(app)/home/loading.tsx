import VideoCardSkeleton from '@/components/VideoCardSkeleton'

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6 lg:px-6 xl:px-8">
      <div className="mb-6 lg:mb-8">
        <div className="skeleton h-10 w-48 mb-2" />
        <div className="skeleton h-5 w-64" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <VideoCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
