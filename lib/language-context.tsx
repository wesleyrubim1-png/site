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
  "hero.eyebrow": { en: "Trombonist · Composer · Producer", fr: "Tromboniste · Compositeur · Producteur" },
  "hero.quote1": {
    en: "His extraordinary instrumental skills place him amongst today’s most promising trombonists and composers.",
    fr: "Ses compétences instrumentales extraordinaires le placent parmi les trombonistes et compositeurs les plus prometteurs d’aujourd’hui."
  },
  "hero.quote1.byline": { en: "Luis Bonilla · Trombonist · NYC / Austria", fr: "Luis Bonilla · Tromboniste · New York / Autriche" },
  "hero.quote2": {
    en: "The album impresses with its musical finesse, free of gimmicks. Three words aptly describe Invisible Lights: POETIC · CATCHY · ETHERICAL.",
    fr: "L’album impressionne par sa finesse musicale, sans artifices. Trois mots décrivent parfaitement Invisible Lights : POÉTIQUE · ACCROCHEUR · ÉTHÉRÉ."
  },
  "hero.quote2.byline": { en: "Eric Sommer · Radio Ella · Berlin", fr: "Eric Sommer · Radio Ella · Berlin" },
  "hero.listen": { en: "Listen Now", fr: "Écouter" },
  "hero.discover": { en: "Discover", fr: "Découvrir" },
  "hero.scroll": { en: "Scroll", fr: "Défiler" },
  
  // EP Section
  "ep.label": { en: "New Release — January 14, 2026", fr: "Nouvelle Sortie — 14 Janvier 2026" },
  "ep.release": { en: "Jazz Family · Distributed by Idol", fr: "Jazz Family · Distribué par Idol" },
  "ep.releaseDate": { en: "Released January 2026", fr: "Sorti en janvier 2026" },
  "ep.labelName": { en: "on the label Jazz Family", fr: "sur le label Jazz Family" },
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
    en: "Wes Rubim is a Brazilian trombonist, composer and producer based in Paris, working at the intersection of contemporary jazz, Brazilian rhythm and electronic texture.",
    fr: "Wes Rubim est tromboniste, compositeur et producteur brésilien basé à Paris, travaillant à l’intersection du jazz contemporain, du rythme brésilien et des textures électroniques."
  },
  "bio.text2": {
    en: "He began his training in Brazil on classical trombone before redirecting his path toward jazz. Spotted early by Luis Bonilla, he was invited to continue his studies in Austria and Germany, later consolidating a hybrid language between tradition and experimentation at the Jazz Institut Berlin (UdK Berlin).",
    fr: "Il a commencé sa formation au Brésil au trombone classique avant de s’orienter vers le jazz. Repéré très tôt par Luis Bonilla, il a été invité à poursuivre ses études en Autriche et en Allemagne, avant de consolider un langage hybride entre tradition et expérimentation au Jazz Institut Berlin (UdK Berlin)."
  },
  "bio.text3": {
    en: "Over the course of his career he has shared the stage with artists such as Andrea Bocelli, Randy Brecker, Jim McNeely, Hamilton Godoy, Guinga and Gabriel Grossi, and has appeared as a guest artist with the Deutsche Oper Berlin.",
    fr: "Au cours de sa carrière, il a partagé la scène avec des artistes tels qu’Andrea Bocelli, Randy Brecker, Jim McNeely, Hamilton Godoy, Guinga et Gabriel Grossi, et s’est produit comme artiste invité avec la Deutsche Oper Berlin."
  },
  "bio.text4": {
    en: "This blend of Brazilian rhythmic folklore and European jazz gave rise to his debut EP, Invisible Lights, released on the Jazz Family label — a project in which Wes pays tribute to his Brazilian roots, his classical training and Nordic jazz, creating a fusion that defines his sound and artistic universe today.",
    fr: "Ce mélange de folklore rythmique brésilien et de jazz européen a donné naissance à son premier EP, Invisible Lights, sorti sur le label Jazz Family — un projet dans lequel Wes rend hommage à ses racines brésiliennes, à sa formation classique et au jazz nordique, créant une fusion qui définit aujourd’hui son son et son univers artistique."
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
