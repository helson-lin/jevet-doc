"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InstructionsSection } from "@/components/instructions-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <InstructionsSection />
        <DownloadSection />
        <Footer />
      </div>
    </main>
  )
}
