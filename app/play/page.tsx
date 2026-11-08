import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Play the Game', description: 'Play the Bird Hunter 60-second arcade challenge.', alternates: { canonical: '/play' } }
export default function Page(){return <main className="play-page"><div className="play-top"><Link href="/" className="brand light"><span className="brand-mark">+</span><span>BIRD <b>HUNTER</b></span></Link><Link href="/how-to-play" className="play-help">How to play</Link></div><iframe title="Bird Hunter game" src="/bird-hunter.html" className="game-frame" /></main>}
