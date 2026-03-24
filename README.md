# Vidora

A full-stack AI-powered video management SaaS platform with intelligent subtitle generation, automatic compression, and social media optimization.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

---

## Live Demo

* **Live URL:** [https://cloudinary-saas.vercel.app/](https://cloudinary-saas.vercel.app/)
* **Demo Video:** [https://youtu.be/3JUyVl4bXAA](https://youtu.be/3JUyVl4bXAA)

### Screenshots

| Dashboard | Social Share | Video Upload | Reel Generation |
|-----------|--------------|--------------|-----------------|
| ![Dashboard](public/Images/DashBoard.png) | ![Social Share](public/Images/SocailPage.png) | ![Upload Page](public/Images/UploadPage.png) | ![Reel Generation](public/Images/Reel-Generation.png) |

---

## Problem Statement

Video creators and businesses struggle with manual subtitle creation, video optimization, and managing video assets across multiple formats. Vidora automates these processes through AI, reducing production time while maintaining quality and enabling easy sharing across social media platforms.

---

## Features

* **AI-Powered Subtitle Generation** — Automatically generate subtitles using OpenAI's Whisper API
* **Smart Reel Generation** — GPT-4o picks the most engaging 30-45s clip, Cloudinary crops it to 9:16
* **Automatic Video Compression** — Client-side compression with Cloudinary integration for optimal storage and delivery
* **Video Analytics Dashboard** — Track video size, compression ratio, duration, and creation history
* **Social Media Sharing** — Direct sharing capabilities for social platforms
* **Secure Authentication** — Clerk integration for user management
* **Responsive Design** — Mobile-first UI with Tailwind CSS and DaisyUI components

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS, DaisyUI |
| **Backend** | Next.js API Routes, Prisma ORM |
| **Database** | PostgreSQL with Prisma Adapter |
| **Auth** | Clerk |
| **Media** | Cloudinary, Next-Cloudinary |
| **AI/ML** | OpenAI API (Whisper, GPT-4o) |
| **Other** | Axios, Lucide React, Dayjs |

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Accounts: [Cloudinary](https://cloudinary.com/), [OpenAI](https://platform.openai.com/), [Clerk](https://clerk.com/)

### 1. Clone and install

```bash
git clone https://github.com/SohailShaikh7860/vidora.git
cd vidora
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/vidora_db
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 3. Setup the database

```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### 5. Build for production

```bash
npm run build
npm start
```

---

## Folder Structure

```
vidora/
├── app/
│   ├── (app)/                    # Authenticated app routes
│   │   ├── home/                 # Dashboard / home page
│   │   ├── reel-generator/       # Reel creation page
│   │   ├── social-share/         # Social media sharing page
│   │   └── video-upload/         # Video upload page
│   ├── (auth)/                   # Auth routes (sign-in, sign-up)
│   ├── api/                      # API routes (see below)
│   ├── layout.tsx
│   └── globals.css
├── components/                   # Reusable React components
├── prisma/                       # Schema & migrations
├── types/                        # Shared TypeScript types
├── utils/                        # Helpers (OpenAI client, etc.)
├── public/                       # Static assets & screenshots
└── middleware.ts                 # Clerk auth middleware
```

---

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/video` | Fetch all videos for the authenticated user |
| `POST` | `/api/video-upload` | Upload and compress a video |
| `DELETE` | `/api/video-delete` | Delete a video from DB and Cloudinary |
| `POST` | `/api/cloudinary-signature` | Generate a secure upload signature |
| `POST` | `/api/subtitle-generator` | Generate subtitles via OpenAI Whisper |
| `POST` | `/api/reel-generator` | AI-pick best clip and create a 9:16 reel |
| `POST` | `/api/image-upload` | Upload a cover image for a video |

---

## Challenges and Learnings

* **Handling Large File Uploads** — Implemented client-side compression before upload using Cloudinary SDK to reduce bandwidth and storage costs, avoiding timeout issues with large video files.

* **Real-time Subtitle Generation** — Integrated OpenAI's Whisper API to generate accurate subtitles asynchronously, handling long-running processes without blocking user experience.

* **Secure Cloudinary Uploads** — Generated server-side signatures for secure, direct client-to-Cloudinary uploads while protecting API credentials from frontend exposure.

* **Database Schema Flexibility** — Designed Prisma schema to support evolving video metadata (subtitles, reel dimensions, formats) while maintaining backward compatibility through migrations.

* **Authentication Integration** — Implemented Clerk for secure, scalable user authentication with minimal custom code and seamless integration with Prisma user tracking.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open-source and available under the [MIT License](LICENSE).
