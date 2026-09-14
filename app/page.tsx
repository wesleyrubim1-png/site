"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EPSection } from "@/components/ep-section"
import { BiographySection } from "@/components/biography-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <EPSection />
        <BiographySection />
        <div className="w-full h-px bg-border max-w-[1304px] mx-auto" />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
