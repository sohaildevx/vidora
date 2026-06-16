import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Vidora",
  description: "Manage and generate subtitles for your video library with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
    <html lang="en" data-theme="dark">


      <body
      >
        {children}
       <GoogleAnalytics gaId="G-PY5DPZY7XR" />
        <div id="toast" className="toast toast-top toast-end z-50">
          
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
