import type { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://bird-hunter-sage.vercel.app/sitemap.xml' } }
