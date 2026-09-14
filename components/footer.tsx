"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase font-light">
        © {currentYear} Wes Rubim. {t("footer.rights")}
      </p>
      <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase font-light">
        {t("footer.design")}
      </p>
    </footer>
  )
}
