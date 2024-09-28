'use client'

import Link from "next/link"
import Navbar from "@/components/ui/header/header"
import HowItWorks from "@/components/ui/HowItWorksSection/HowItWorks"
import ReadyToSwap from "@/components/ui/ReacytoSwapSection/Comp"
import Hero from "@/components/ui/Hero/Hero"
export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ReadyToSwap />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Bango. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}