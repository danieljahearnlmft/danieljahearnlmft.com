import type { MetadataRoute } from 'next'

const BASE = 'https://danieljahearnlmft.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '',                                          priority: 1.0, changeFrequency: 'monthly' },
    { path: '/about',                                    priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services',                                 priority: 0.9, changeFrequency: 'monthly' },
    { path: '/mens-work',                                priority: 0.9, changeFrequency: 'monthly' },
    { path: '/the-way-back-home',                        priority: 0.9, changeFrequency: 'monthly' },
    { path: '/parent-support-groups',                    priority: 0.9, changeFrequency: 'monthly' },
    { path: '/consulting',                               priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact',                                  priority: 0.8, changeFrequency: 'yearly'  },
    { path: '/integrative-attachment-therapy',           priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ideal-parent-figure-protocol',             priority: 0.7, changeFrequency: 'monthly' },
    { path: '/iat-certified-therapist',                  priority: 0.7, changeFrequency: 'monthly' },
    { path: '/earned-secure-attachment',                 priority: 0.7, changeFrequency: 'monthly' },
    { path: '/attachment-therapy-adults',                priority: 0.7, changeFrequency: 'monthly' },
    { path: '/healing-attachment-wounds',                priority: 0.7, changeFrequency: 'monthly' },
    { path: '/attachment-styles',                        priority: 0.7, changeFrequency: 'monthly' },
    { path: '/attachment-based-therapy-los-angeles',     priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
