import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import Effects from '@/components/Effects'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'], weight: ['300','400','500','600','700'],
  style: ['normal','italic'], variable: '--font-cormorant', display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'], weight: ['300','400','500','600','700'],
  variable: '--font-dm-sans', display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Javer — Performance Digital Marketing | Edmonton & Calgary', template: '%s | Javer' },
  description: 'Proven data-driven marketing strategies that deliver real, measurable growth. Edmonton & Calgary performance digital marketing agency. Google Partner. Meta Partner. Microsoft Advertising.',
  keywords: ['digital marketing Edmonton', 'digital marketing Calgary', 'Google Ads Edmonton', 'SEO Edmonton', 'Meta Ads Alberta', 'performance marketing Alberta'],
  openGraph: {
    siteName: 'Javer',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Javer — Performance Digital Marketing' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Javer Digital Marketing',
  url: 'https://javer.ca',
  telephone: '+1-780-860-3865',
  email: 'markus.tran@wearejodigital.com',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Edmonton', addressRegion: 'AB', addressCountry: 'CA' },
    { '@type': 'PostalAddress', addressLocality: 'Calgary',  addressRegion: 'AB', addressCountry: 'CA' },
  ],
  serviceArea: ['Edmonton', 'Calgary', 'Alberta', 'Canada'],
  priceRange: '$$',
  knowsAbout: ['Google Ads', 'Meta Advertising', 'SEO', 'Web Design', 'Digital Strategy', 'Marketing Analytics'],
  sameAs: ['https://www.linkedin.com/company/javer'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <Script id="schema" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="grain-wrap" style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', overflowX: 'hidden' }}>
        <div id="progress-bar" />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ProgressBar />
        <Effects />
      </body>
    </html>
  )
}
