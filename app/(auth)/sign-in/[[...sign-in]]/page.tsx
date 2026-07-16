import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <header className="fixed top-0 w-full z-50">
        <div className="max-w-[1400px] mx-auto flex items-center px-4 sm:px-6 md:px-10 h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-white">
            <Image src="/svgs/logo.svg" alt="Vidora" width={32} height={32} className="invert" />
            Vidora
          </Link>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-screen pt-14 sm:pt-16">
        <SignIn fallbackRedirectUrl="/home" />
      </div>
    </div>
  )
}
