"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.ep": { en: "The EP", fr: "L'EP" },
  "nav.biography": { en: "Biography", fr: "Biographie" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  
  // Hero
  "hero.eyebrow": { en: "Trombonist · Composer · Paris", fr: "Tromboniste · Compositeur · Paris" },
  "hero.desc": { 
    en: "Brazilian jazz in dialogue with the world. A work of subtle atmospheres, emotional density, and clear artistic vision.",
    fr: "Jazz brésilien en dialogue avec le monde. Une œuvre d'atmosphères subtiles, de densité émotionnelle et de vision artistique claire."
  },
  "hero.listen": { en: "Listen Now", fr: "Écouter" },
  "hero.discover": { en: "Discover", fr: "Découvrir" },
  "hero.scroll": { en: "Scroll", fr: "Défiler" },
  
  // EP Section
  "ep.label": { en: "New Release — January 14, 2026", fr: "Nouvelle Sortie — 14 Janvier 2026" },
  "ep.release": { en: "Jazz Family · Distributed by Idol", fr: "Jazz Family · Distribué par Idol" },
  "ep.quote": {
    en: "\"Invisible Lights evokes the idea that everyone carries a unique light within them. An inner brightness, sometimes subtle, sometimes dazzling, but always unique. This album is a way of paying tribute to these lights that shape us, guide us, and reveal what makes us unique.\"",
    fr: "« Invisible Lights évoque cette idée que chacun porte en soi une lumière singulière. Une clarté intérieure, parfois discrète, parfois éclatante, mais toujours unique. Cet album est une manière de rendre hommage à ces lumières qui nous façonnent, nous guident et révèlent ce que nous avons d'unique. »"
  },
  "ep.description": {
    en: "The blend of rhythmic Brazilian folklore and European jazz gave rise to this EP, where Wes pays tribute to his Brazilian roots, classical music, and Nordic jazz — creating a unique fusion that characterizes his style and musical universe.",
    fr: "Le mélange du folklore rythmé brésilien et du jazz européen a donné naissance à cet EP, où Wes rend hommage à ses racines brésiliennes, à la musique classique et au jazz nordique — créant une fusion unique qui caractérise son style et son univers musical."
  },
  "ep.body1": {
    en: "In Invisible Lights, Wes Rubim presents a portrait of contemporary Brazilian jazz from an authorial and hybrid perspective. The album starts from the idea that each individual carries within them their own luminous identity—variable, changing, and unique—and translates this concept into a work that emphasizes atmosphere, nuance, and sonic intention.",
    fr: "Dans Invisible Lights, Wes Rubim présente un portrait du jazz contemporain brésilien à partir d'une perspective autorale et hybride. L'album part de l'idée que chaque individu porte en lui une identité lumineuse propre — variable, changeante et singulière — et traduit ce concept dans une œuvre qui privilégie l'atmosphère, la nuance et l'intention sonore."
  },
  "ep.body2": {
    en: "Invisible Lights is organized as an emotional state in motion, traversing energy, melancholy, agitation, and affirmation. The compositions function as spaces for expanded listening, where structure and improvisation coexist in balance.",
    fr: "Invisible Lights s'organise comme un état émotionnel en mouvement, traversant énergie, mélancolie, agitation et affirmation. Les compositions fonctionnent comme des espaces d'écoute élargie, où structure et improvisation coexistent en équilibre."
  },
  "ep.quote": {
    en: "An album built on subtlety, emotional density, and a clear artistic vision—inviting the listener to a profound experience, without excess, and fully aware of its own light.",
    fr: "Un album qui se construit par la subtilité, la densité émotionnelle et une vision artistique claire — invitant l'auditeur à une expérience profonde, sans excès, et pleinement conscient de sa propre lumière."
  },
  
  // Tracks / Album
  "tracks.albumDescription": { 
    en: "A journey through contemporary Brazilian jazz, featuring original compositions that blend tradition with experimentation.",
    fr: "Un voyage à travers le jazz brésilien contemporain, avec des compositions originales qui mêlent tradition et expérimentation."
  },
  "tracks.listen": { en: "Listen on Streaming", fr: "Écouter en Streaming" },
  "tracks.musicians": { en: "Musicians", fr: "Musiciens" },
  "tracks.keyboards": { en: "Keyboards", fr: "Claviers" },
  "tracks.bass": { en: "Electric Bass", fr: "Basse Électrique" },
  "tracks.drums": { en: "Drums", fr: "Batterie" },
  "tracks.trombone": { en: "Trombone", fr: "Trombone" },
  "tracks.recorded": { en: "Recorded in", fr: "Enregistré à" },
  "tracks.label": { en: "Label", fr: "Label" },
  
  // Biography
  "bio.label": { en: "Biography", fr: "Biographie" },
  "bio.title1": { en: "A Voice in", fr: "Une Voix du" },
  "bio.title2": { en: "Contemporary Jazz", fr: "Jazz Contemporain" },
  "bio.text1": {
    en: "Wes Rubim is a Brazilian trombonist and composer active in the field of contemporary jazz, with a musical approach that combines improvisation, composition, and elements of Brazilian music. His work is based on attentive listening and an authorial approach centered on spirituality, contemplation, and the creation of soundscapes.",
    fr: "Wes Rubim est tromboniste et compositeur brésilien, actif dans le champ du jazz contemporain, avec une recherche musicale qui articule improvisation, composition et éléments de la musique brésilienne. Son travail se développe à partir d'une écoute attentive et d'une approche autorale, centrée sur la spiritualité, la contemplation et la construction d'atmosphères sonores."
  },
  "bio.text2": {
    en: "He began his training in Brazil in classical trombone and subsequently furthered his studies in jazz at the Jazz Institut Berlin (UdK), where he consolidated a hybrid language between tradition and experimentation.",
    fr: "Il a commencé sa formation au Brésil en trombone classique et, par la suite, approfondi ses études en jazz au Jazz Institut Berlin (UdK), où il a consolidé un langage hybride entre tradition et expérimentation."
  },
  "bio.text3": {
    en: "Currently based in Paris, Wes Rubim is active on the European scene through personal projects and various collaborations, navigating between instrumental music, improvisation, and larger-scale productions.",
    fr: "Actuellement basé à Paris, Wes Rubim agit sur la scène européenne à travers des projets personnels et diverses collaborations, naviguant entre musique instrumentale, improvisée et productions de plus grande envergure."
  },
  "bio.collab": { en: "Collaborations", fr: "Collaborations" },
  
  // Contact
  "contact.label": { en: "Connect", fr: "Contact" },
  "contact.title": { en: "Contact", fr: "Contact" },
  "contact.email": { en: "Email", fr: "Email" },
  "contact.phone": { en: "Phone", fr: "Téléphone" },
  "contact.whatsapp": { en: "WhatsApp", fr: "WhatsApp" },
  "contact.streaming": { en: "Streaming", fr: "Streaming" },
  "contact.social": { en: "Social", fr: "Réseaux" },
  
  // Footer
  "footer.rights": { en: "All rights reserved", fr: "Tous droits réservés" },
  "footer.design": { en: "Contemporary Brazilian Jazz", fr: "Jazz Contemporain Brésilien" },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
