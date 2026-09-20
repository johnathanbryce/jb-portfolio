import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://www.jbryce.dev', lastModified: new Date() }]
}
