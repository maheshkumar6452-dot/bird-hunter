'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { Menu, X, Crosshair, ArrowRight } from 'lucide-react'

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const links = [['How to play', '/how-to-play'], ['About', '/about'], ['Contact', '/contact']]
  return <div className="site-shell">
    <header className="site-header"><Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Crosshair size={18} /></span><span>BIRD <b>HUNTER</b></span></Link>
      <nav className={open ? 'nav open' : 'nav'}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-play" href="/play" onClick={() => setOpen(false)}>Play now <ArrowRight size={16} /></Link></nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>{children}
    <footer className="site-footer"><div><Link href="/" className="footer-brand">BIRD HUNTER</Link><p>A bright, skillful arcade challenge for quick breaks and high-score chasers.</p></div><div className="footer-links"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/contact">Contact</Link></div><small>© 2026 Bird Hunter. Built for play.</small></footer>
  </div>
}

export function ContentPage({ title, eyebrow, intro, children }: { title: string; eyebrow: string; intro: string; children: ReactNode }) {
  return <SiteShell><main className="content-page"><div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div><article className="prose">{children}</article></main></SiteShell>
}
