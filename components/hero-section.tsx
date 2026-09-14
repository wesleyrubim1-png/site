"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden border-b border-foreground/15 bg-[#e9e5df]">
      <div className="absolute inset-0 lg:left-[30%]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daniela-wesley-wed-543-7Cmjf3RRmShcjzUMmMX0EwRy7ZUEej.jpg"
          alt="Wes Rubim playing trombone"
          fill
          className="object-cover object-center grayscale scale-100 animate-slow-zoom"
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9e5df] via-[#e9e5df]/20 to-transparent lg:via-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-14 pt-28 md:px-12 md:pb-20 lg:px-16">
        <div className="max-w-[720px]">
          <h1 className="font-serif text-[clamp(64px,10vw,150px)] font-light leading-[0.78] tracking-[-0.06em] text-foreground">
            Wes<br /><em className="ml-[0.18em]">Rubim</em>
          </h1>
          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-foreground">{t("hero.eyebrow")}</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 md:flex lg:right-16">
        <div className="h-12 w-px bg-foreground/50 animate-scroll-line" />
        <span className="text-[8px] uppercase tracking-[0.35em] text-foreground/65 [writing-mode:vertical-rl]">{t("hero.scroll")}</span>
      </div>
    </section>
  )
}
