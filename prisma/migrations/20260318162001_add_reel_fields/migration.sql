-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "hasReel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reelPublicId" TEXT,
ADD COLUMN     "reelUrl" TEXT,
ALTER COLUMN "userId" DROP DEFAULT;
