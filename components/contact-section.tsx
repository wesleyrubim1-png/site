"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const contactItems = [
  { 
    labelKey: "contact.email", 
    value: "wes.rubim@gmail.com", 
    href: "mailto:wes.rubim@gmail.com" 
  },
  { 
    labelKey: "contact.phone", 
    value: "+33 06 52 03 96 88", 
    href: "tel:+330652039688" 
  },
]

const socialLinks = [
  { 
    label: "Instagram", 
    value: "@wesrubim", 
    href: "https://www.instagram.com/wesrubim/" 
  },
  { 
    label: "YouTube", 
    value: "Wes Rubim", 
    href: "https://www.youtube.com/@wesrubim" 
  },
  { 
    label: "Streaming", 
    value: "All Platforms", 
    href: "https://notnoise.co/link/wes-rubim-invisible_lights" 
  },
]

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="contact" ref={ref} className="relative border-b border-foreground/15">
      {/* Image Banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0107.JPG-RGPTGY9vhTIo4z8J06vomIr0B5PuVV.jpeg"
          alt="Wes Rubim"
          fill
          className="object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Contact Content */}
      <div className="px-6 md:px-16 lg:px-24 py-20 md:py-32 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Title & Contact Info */}
          <div>
            <span className={`text-[10px] tracking-[0.3em] uppercase text-accent mb-6 block transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("contact.label")}
            </span>
            
            <h2 className={`font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.1] tracking-tight mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("contact.title")}
            </h2>

            <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {contactItems.map((item) => (
                <a 
                  key={item.labelKey}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 block mb-1">
                    {t(item.labelKey)}
                  </span>
                  <span className="text-lg text-foreground group-hover:text-accent transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-8 block">
              {t("contact.social")}
            </span>
            
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-border/30 group hover:border-accent/50 transition-colors"
                >
                  <span className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.label}
                  </span>
                  <span className="text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {link.value}
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
