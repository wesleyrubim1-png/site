"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight } from "lucide-react"

const musicians = [
  { role: "keyboards", name: "Henrique Mota" },
  { role: "bass", name: "Gustavo Fonseca" },
  { role: "drums", name: "Vinícius Teixeira" },
  { role: "trombone", name: "Wes Rubim" },
]

export function TracksSection() {
  const { t } = useLanguage()
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="border-y border-background/20 bg-foreground px-6 py-28 text-background md:px-12 md:py-40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Album Info */}
        <div>
          <h2 className={`font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] tracking-tight mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Invisible_Lights
          </h2>
          
          <p className={`font-serif text-xl md:text-2xl font-light leading-relaxed text-background/70 mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t("tracks.albumDescription")}
          </p>

          <a 
            href="https://notnoise.co/link/wes-rubim-invisible_lights"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 border border-background/30 text-[10px] tracking-[0.3em] uppercase hover:bg-background hover:text-foreground transition-all duration-500 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {t("tracks.listen")}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Musicians & Info */}
        <div className={`pt-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-[8px] tracking-[0.4em] uppercase text-muted-foreground mb-8 font-normal">
            {t("tracks.musicians")}
          </h3>
          
          {musicians.map((musician) => (
            <div 
              key={musician.name}
              className="flex justify-between py-4 border-b border-secondary/10 text-sm tracking-wide"
            >
              <span className="text-muted-foreground uppercase text-[8px] tracking-[0.2em]">
                {t(`tracks.${musician.role}`)}
              </span>
              <span className="text-background font-serif text-base font-light">
                {musician.name}
              </span>
            </div>
          ))}

          <div className="mt-12 p-7 border border-secondary/20">
            <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground leading-8">
              {t("tracks.recorded")} <strong className="text-background font-normal">São Paulo, Brazil</strong>
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground leading-8">
              {t("tracks.label")} <strong className="text-background font-normal">Jazz Family</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
