export interface Video {
    id: string;
    title:string;
    description: string | null;
    publicId: string;
    OriginalSize: string;
    compressedSize: string;
    duration: string;
    subtitles?: string | null;
    hasSubtitles?: boolean;
    subtitleFormat?: string | null;
    reelPublicId?: string | null;
    reelUrl?: string | null;
    hasReel?: boolean;
    createdAt: Date;
    updatedAt: Date;
}