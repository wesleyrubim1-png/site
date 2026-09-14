"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex items-center justify-between">
      <a 
        href="#hero" 
        className="font-sans text-[10px] tracking-[0.35em] font-normal uppercase text-foreground hover:opacity-50 transition-opacity"
      >
        Wes Rubim
      </a>
      
      <div className="hidden md:flex items-center gap-9">
        <a 
          href="#ep" 
          className="text-[9px] tracking-[0.25em] uppercase text-accent hover:text-foreground transition-colors relative group"
        >
          {t("nav.ep")}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
        </a>
        <a 
          href="#bio" 
          className="text-[9px] tracking-[0.25em] uppercase text-accent hover:text-foreground transition-colors relative group"
        >
          {t("nav.biography")}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
        </a>
        <a 
          href="#contact" 
          className="text-[9px] tracking-[0.25em] uppercase text-accent hover:text-foreground transition-colors relative group"
        >
          {t("nav.contact")}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-normal">
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "transition-colors",
            language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          EN
        </button>
        <span className="text-muted-foreground">/</span>
        <button
          onClick={() => setLanguage("fr")}
          className={cn(
            "transition-colors",
            language === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          FR
        </button>
      </div>
    </nav>
  )
}
