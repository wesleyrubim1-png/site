import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Wes Rubim — Invisible Lights',
  description: 'Brazilian trombonist and composer. Contemporary Brazilian jazz in dialogue with the world.',
  keywords: ['Wes Rubim', 'trombone', 'jazz', 'Brazilian jazz', 'composer', 'Paris', 'Invisible Lights'],
  openGraph: {
    title: 'Wes Rubim — Invisible Lights',
    description: 'Brazilian trombonist and composer. Contemporary Brazilian jazz in dialogue with the world.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
