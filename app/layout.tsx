import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bird-hunter-sage.vercel.app'),
  title: { default: 'Bird Hunter | A Colorful Arcade Shooting Game', template: '%s | Bird Hunter' },
  description: 'Play Bird Hunter, a fast, colorful arcade game where you aim, shoot, and chase a new high score in 60 seconds.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: 'https://bird-hunter-sage.vercel.app', title: 'Bird Hunter | A Colorful Arcade Shooting Game', description: 'A joyful 60-second bird hunting challenge with colorful birds, rising levels, and a saved high score.', siteName: 'Bird Hunter' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#081d3b' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>
}
