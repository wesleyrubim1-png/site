"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

export function EPSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section id="ep" ref={ref} className="relative border-b border-foreground/15">
      {/* Transition element */}
      <div className="h-32 md:h-48 bg-background relative z-10" />
      
      {/* Large Photo with Gradient Overlay */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daniela-wesley-wed-577-NOnjrJKRQqrGIST5xvuMPoK1xnYoF4.jpg"
          alt="Wes Rubim playing trombone"
          fill
          className="object-cover object-center"
        />
        {/* Multi-layer gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="px-6 md:px-16 lg:px-24 pb-20 md:pb-32 max-w-3xl">
            <span className={`text-[10px] tracking-[0.3em] uppercase text-accent/80 mb-6 block transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("ep.label")}
            </span>
            <h2 className={`font-serif text-[clamp(36px,6vw,72px)] font-light leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-accent font-light">//</span> Invisible_Lights
            </h2>
            <p className={`text-[11px] tracking-[0.2em] uppercase text-foreground/60 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("ep.release")}
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section with breathing room */}
      <div className="px-6 md:px-16 lg:px-24 py-20 md:py-32 bg-background">
        <div className="max-w-4xl">
          {/* Quote */}
          <blockquote className={`font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 mb-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t("ep.quote")}
          </blockquote>
          
          {/* Description */}
          <p className={`text-base md:text-lg leading-relaxed text-muted-foreground mb-12 max-w-2xl transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t("ep.description")}
          </p>
          
          {/* CTA */}
          <a 
            href="https://notnoise.co/link/wes-rubim-invisible_lights"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-foreground hover:text-accent transition-all duration-500 delay-500 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="w-12 h-px bg-foreground group-hover:w-20 group-hover:bg-accent transition-all duration-300" />
            {t("tracks.listen")}
          </a>
        </div>
      </div>
    </section>
  )
}
