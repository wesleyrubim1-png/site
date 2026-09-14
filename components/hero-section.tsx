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

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pb-14 lg:px-16">
        <div className="flex items-start justify-between gap-8">
          <p className="max-w-[180px] text-[9px] uppercase leading-[1.7] tracking-[0.28em] text-foreground/65">
            {t("hero.eyebrow")}
          </p>
          <p className="hidden text-right text-[9px] uppercase leading-[1.7] tracking-[0.28em] text-foreground/65 md:block">
            Paris / São Paulo<br />2026 — Issue 01
          </p>
        </div>

        <div className="max-w-[680px] pb-4 lg:pb-0">
          <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-accent">A portrait in sound</p>
          <h1 className="font-serif text-[clamp(76px,14vw,190px)] font-light leading-[0.73] tracking-[-0.065em] text-foreground">
            Wes<br /><em className="ml-[0.18em]">Rubim</em>
          </h1>
          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-foreground">Invisible Lights</p>
              <p className="mt-3 max-w-[300px] text-[11px] leading-[1.8] tracking-wide text-foreground/65">{t("hero.desc")}</p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <a href="https://notnoise.co/link/wes-rubim-invisible_lights" target="_blank" rel="noopener noreferrer" className="border border-foreground bg-foreground px-7 py-3.5 text-[9px] uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent hover:border-accent">{t("hero.listen")}</a>
              <a href="#bio" className="text-[9px] uppercase tracking-[0.25em] text-foreground/65 transition-colors hover:text-accent">{t("hero.discover")}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 md:flex lg:right-16">
        <div className="h-12 w-px bg-foreground/50 animate-scroll-line" />
        <span className="text-[8px] uppercase tracking-[0.35em] text-foreground/65 [writing-mode:vertical-rl]">{t("hero.scroll")}</span>
      </div>
    </section>
  )
}
