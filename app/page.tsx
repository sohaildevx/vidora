import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen selection:bg-white selection:text-black">
      
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 sm:h-16">
          <Link href="/" className="text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-white">
            Vidora
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
            <a href="#process" className="hover:text-white transition-colors duration-300">How it works</a>
          </nav>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href="/sign-in" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-300">
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="text-xs sm:text-sm bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-white/90 transition-colors duration-300"
            >
              Start free
            </Link>
          </div>
        </div>
      </header>

      
      <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center pb-10 sm:pb-16 md:pb-20 pt-20 sm:pt-24 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <p className="text-white/60 text-xs sm:text-sm tracking-wide mb-4 sm:mb-6 md:mb-8">
            Video &middot; Images &middot; AI &middot; Subtitles &middot; Reel Generator
          </p>
          <h1 className="text-[clamp(2rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight max-w-5xl">
            Your media,
            <br />
            <span className="italic font-light">actually</span> optimized.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 md:gap-10 border-t border-white/15 pt-6 sm:pt-8 md:pt-10">
          <p className="text-white/70 max-w-md text-sm sm:text-[15px] leading-relaxed">
            Upload a video, get subtitles in seconds, turn any clip into a
            vertical reel, and share it everywhere. One tool, zero fluff.
          </p>
          <Link
            href="/sign-up"
            className="group flex items-center gap-3 text-sm border-2 border-white/40 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 w-fit font-medium"
          >
            Get started
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              ↗
            </span>
          </Link>
        </div>
      </section>

      
      <div className="border-y border-white/10 py-3 sm:py-4 overflow-hidden">
        <div className="flex gap-6 sm:gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-[11px] sm:text-[13px] text-white/40 uppercase tracking-widest">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 sm:gap-12">
              <span>Video Upload</span>
              <span>•</span>
              <span>AI Subtitles</span>
              <span>•</span>
              <span>AI Reel Generator</span>
              <span>•</span>
              <span>Social Share</span>
              <span>•</span>
              <span>Cloud Storage</span>
              <span>•</span>
              <span>Cloudinary Powered</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      
      <section id="features" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-[12px] sm:text-[13px] uppercase tracking-[0.15em] text-white/60">
            Features
          </h2>
          <p className="text-white/70 max-w-lg text-sm sm:text-[15px] leading-relaxed">
            Everything you need to go from raw footage to publish-ready
            content &mdash; no extra tools, no context-switching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
          <div className="bg-white/[0.03] border border-white/15 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500 group">
            <span className="text-white/40 text-[12px] sm:text-[13px] tracking-wider font-mono">01</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-white">
              Video Upload
            </h3>
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Drag-and-drop videos up to 100 MB. Files land in Cloudinary
              with automatic format optimization &mdash; no config needed.
            </p>
            <div className="mt-6 sm:mt-8 w-full h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          
          <div className="bg-white/[0.03] border border-white/15 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 sm:mt-16 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500 group">
            <span className="text-white/40 text-[12px] sm:text-[13px] tracking-wider font-mono">02</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-white">
              AI Subtitles
            </h3>
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              One click, accurate captions. Powered by OpenAI Whisper &mdash;
              generates time-coded VTT subtitles you can download or preview
              instantly.
            </p>
            <div className="mt-6 sm:mt-8 w-full h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          
          <div className="bg-white/[0.03] border border-white/15 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500 group">
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-[12px] sm:text-[13px] tracking-wider font-mono">03</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white bg-white/10 border border-white/20 rounded-full px-2.5 py-0.5">
                New
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-white">
              AI Reel Generator
            </h3>
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Feed it a long video and AI picks the most engaging segment,
              crops to 9:16, and hands you a download-ready short for
              TikTok, Reels, or YouTube Shorts.
            </p>
            <div className="mt-6 sm:mt-8 w-full h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          
          <div className="bg-white/[0.03] border border-white/15 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 sm:mt-16 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-500 group">
            <span className="text-white/40 text-[12px] sm:text-[13px] tracking-wider font-mono">04</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-white">
              Social Share
            </h3>
            <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Resize images to every major platform ratio in one step.
              Preview the result, grab the optimized link, and post.
            </p>
            <div className="mt-6 sm:mt-8 w-full h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>
        </div>
      </section>

      
      <section id="process" className="border-t border-white/10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto">
        <h2 className="text-[12px] sm:text-[13px] uppercase tracking-[0.15em] text-white/80 mb-10 sm:mb-16 md:mb-20">
          How it works
        </h2>
        <div className="space-y-0">
          {[
            {
              num: "01",
              title: "Upload your video",
              desc: "Drag and drop any video up to 100 MB. It lands in your cloud library instantly.",
            },
            {
              num: "02",
              title: "Let AI do the heavy lifting",
              desc: "Generate subtitles, create a vertical reel from the best moment, or resize for social — all in one click.",
            },
            {
              num: "03",
              title: "Download & share",
              desc: "Grab your processed files, copy a shareable link, or post directly to your favorite platform.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4 md:gap-16 py-6 sm:py-8 md:py-10 border-b border-white/10 group hover:md:pl-4 transition-all duration-500"
            >
              <span className="text-white/60 text-xs sm:text-sm font-mono w-8 shrink-0">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-white md:w-[40%] group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed md:ml-auto md:max-w-sm md:text-right">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto text-center">
        <p className="text-white/50 text-xs sm:text-sm tracking-wide mb-4 sm:mb-6">
          No credit card. No setup fees. No nonsense.
        </p>
        <h2 className="text-[clamp(1.75rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-8 sm:mb-10">
          Stop overthinking it.
          <br />
          <span className="text-white/50">Just start creating.</span>
        </h2>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-3 bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Create free account
          <span>↗</span>
        </Link>
      </section>

      <footer className="border-t border-white/10 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row justify-between gap-8 sm:gap-10">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase font-semibold mb-2 sm:mb-3 text-white">
              Vidora
            </p>
            <p className="text-white/50 text-[12px] sm:text-[13px]">
              Built for creators who value their time.
            </p>
          </div>
          <div className="flex gap-12 sm:gap-16 text-[12px] sm:text-[13px]">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <span className="text-white/40 uppercase tracking-wider text-[10px] sm:text-[11px] mb-1">
                Product
              </span>
              <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#process" className="text-white/60 hover:text-white transition-colors">How it works</a>
              <Link href="/sign-up" className="text-white/60 hover:text-white transition-colors">Sign up</Link>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <span className="text-white/40 uppercase tracking-wider text-[10px] sm:text-[11px] mb-1">
                Legal
              </span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto border-t border-white/10 py-4 sm:py-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-white/40">
          <span>&copy; 2026 Vidora</span>
          <div className="flex gap-6">
            <a href="https://x.com/Sohaildevs" className="hover:text-white transition-colors">X / Twitter</a>
            <a href="https://github.com/SohailShaikh7860" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
