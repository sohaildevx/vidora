import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import VideoGrid from '@/components/VideoGrid'

async function fetchVideos() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return []
    }

    const videos = await prisma.video.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })

    return videos
  } catch (error) {
    console.error('Failed to fetch videos:', error)
    return []
  }
}

export default async function HomePage() {
  const videos = await fetchVideos()

  return (
    <div className="container mx-auto px-4 py-6 lg:px-6 xl:px-8">
      <VideoGrid initialVideos={videos} />
    </div>
  )
}
