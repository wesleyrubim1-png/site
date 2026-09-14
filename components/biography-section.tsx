"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const collaborations = [
  "Randy Brecker",
  "Jim McNeely",
  "Deutsche Oper Berlin",
  "Andrea Bocelli",
  "Guinga",
  "Lea Freire",
  "Gabriel Grossi",
  "Hamilton Godoy",
]

export function BiographySection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="bio" ref={ref} className="px-6 md:px-16 lg:px-24 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <span className={`text-[10px] tracking-[0.3em] uppercase text-accent mb-6 block transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t("bio.label")}
          </span>
          
          <h2 className={`font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-tight mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t("bio.title1")}<br />
            <em className="text-muted-foreground">{t("bio.title2")}</em>
          </h2>
          
          <div className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>{t("bio.text1")}</p>
            <p>{t("bio.text2")}</p>
            <p>{t("bio.text3")}</p>
          </div>

          {/* Collaborations */}
          <div className={`mt-16 pt-10 border-t border-border/50 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-6 block">
              {t("bio.collab")}
            </span>
            <p className="font-serif text-lg font-light leading-8 text-foreground italic">
              {collaborations.join(" · ")}
            </p>
          </div>
        </div>

        {/* Photo - Sticky on side */}
        <div className={`order-1 lg:order-2 lg:sticky lg:top-32 h-fit transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="aspect-[3/4] relative overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0477.JPG-zUE7hfm6stZaYH92oV2ICe3eMLEMNw.jpeg"
              alt="Wes Rubim portrait"
              fill
              className="object-cover object-top grayscale-[15%] transition-all duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
