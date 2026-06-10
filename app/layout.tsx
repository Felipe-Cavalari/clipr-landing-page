import type { Metadata } from 'next'
import { JetBrains_Mono, IBM_Plex_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteUrl, softwareAppSchema, faqSchema } from '@/lib/structured-data'
import SmoothScrollProvider from '@/components/motion/SmoothScrollProvider'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Clipr — Baixar Vídeos do YouTube | Video Downloader CLI',
    template: '%s | Clipr',
  },
  description:
    'Baixe vídeos do YouTube, Shorts e Instagram Reels com um único comando. Clipr é a CLI open source para download de videos em Full HD. 100% grátis e sem limites.',
  keywords: [
    'baixar videos do youtube',
    'download videos',
    'youtube video downloader',
    'online video downloader',
    'save youtube videos',
    'clipr',
    'youtube downloader cli',
    'baixar reels instagram',
    'video downloader',
    'baixar videos',
    'download youtube',
    'youtube shorts downloader',
  ],
  authors: [{ name: 'Felipe Cavalari', url: 'https://felipecavalari.com.br' }],
  creator: 'Felipe Cavalari',
  publisher: 'CavalariDev',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: 'Clipr — Baixar Vídeos do YouTube com Um Comando',
    description:
      'CLI open source para baixar videos do YouTube e Instagram Reels em Full HD. Simples, rápido e 100% gratuito.',
    siteName: 'Clipr',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clipr — Baixar Vídeos do YouTube com Um Comando',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clipr — Baixar Vídeos do YouTube com Um Comando',
    description:
      'CLI open source para baixar videos do YouTube e Instagram Reels em Full HD.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${jetbrainsMono.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-200 antialiased font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Script
          defer
          src="https://analytics.cavalaridev.com.br/script.js"
          data-website-id="6cb3486c-dd47-4932-8a11-e030cd3a746f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
