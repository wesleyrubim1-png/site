"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col justify-end px-6 pb-20 md:px-12 md:pb-24 relative z-10 min-h-screen lg:min-h-0">
        <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          {t("hero.eyebrow")}
        </p>
        
        <h1 className="font-serif text-[clamp(60px,10vw,120px)] font-light leading-[0.92] tracking-tight animate-fade-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
          Wes<br />
          <em className="text-muted-foreground">Rubim</em>
        </h1>
        
        <p className="text-[9px] tracking-[0.35em] uppercase text-accent mt-7 animate-fade-up opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]">
          // Invisible_Lights
        </p>
        
        <p className="text-[11px] leading-[1.9] text-muted-foreground mt-7 max-w-[340px] tracking-wide animate-fade-up opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">
          {t("hero.desc")}
        </p>
        
        <div className="flex items-center gap-6 mt-12 animate-fade-up opacity-0 [animation-delay:1100ms] [animation-fill-mode:forwards]">
          <a 
            href="https://notnoise.co/link/wes-rubim-invisible_lights"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] tracking-[0.25em] uppercase bg-foreground text-background px-8 py-4 font-normal hover:bg-accent transition-colors"
          >
            {t("hero.listen")}
          </a>
          <a 
            href="#bio"
            className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("hero.discover")}
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block relative overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1020888%202-c7E4BpXbEqJB6PiFH5ffoa4aHDGjTh.jpg"
          alt="Wes Rubim"
          fill
          className="object-cover object-top grayscale-[30%] scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-up opacity-0 [animation-delay:1800ms] [animation-fill-mode:forwards]">
        <div className="w-px h-12 bg-muted-foreground/50 animate-scroll-line" />
        <span className="text-[8px] tracking-[0.35em] uppercase text-muted-foreground">
          {t("hero.scroll")}
        </span>
      </div>
    </section>
  )
}
