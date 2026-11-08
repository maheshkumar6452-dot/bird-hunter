import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { const base='https://bird-hunter-sage.vercel.app'; return ['','/play','/how-to-play','/about','/contact','/privacy-policy','/terms','/disclaimer'].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:'monthly',priority:path===''?1:0.7})) }
