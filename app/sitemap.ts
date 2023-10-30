import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${SEO_DEFAULT_VALUES.base_url}/`,
			changeFrequency: 'monthly',
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${SEO_DEFAULT_VALUES.base_url}/services`,
			changeFrequency: 'monthly',
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${SEO_DEFAULT_VALUES.base_url}/about`,
			changeFrequency: 'monthly',
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${SEO_DEFAULT_VALUES.base_url}/terms-and-conditions`,
			changeFrequency: 'yearly',
			lastModified: new Date(),
			priority: 0.1,
		},
	];
}
