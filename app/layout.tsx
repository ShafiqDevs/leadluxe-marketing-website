import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css';
import Navbar from './components/containers/Navbar';
import BrandLogo from './components/icons/BrandLogo';
import MobileNavbar from './components/containers/MobileNavbar';
import NavLink from './components/ui/NavLink';
import ThemesProvider from '@/utils/contexts/ThemesProvider';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { config_contact_details } from '@/utils/configs/contact';
import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';
import { SOCIALS_DEFAULT_VALUES } from '@/utils/configs/socials';
import GoogleAnalytics from './components/containers/GoogleAnalytics';
import CookieBanner from './components/ui/CookieBanner';
import MetaChatButton from './components/ui/MetaChatButton';
import { Suspense } from 'react';

const prompt = Prompt({
	weight: ['300', '400', '500', '600'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL(SEO_DEFAULT_VALUES.base_url),
	title: `${SEO_DEFAULT_VALUES.brand_name} - Effortless Home Improvement Growth`,
	description: `At ${SEO_DEFAULT_VALUES.brand_name} we simplify growth for home improvement businesses. We provide high-quality leads, freeing you from the heavy lifting.`,
	verification: {
		google: SEO_DEFAULT_VALUES.verification.google_search_console,
	},
	alternates: {
		canonical: `${SEO_DEFAULT_VALUES.base_url}/`,
	},
	robots: {
		index: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className='dark scroll-smooth'
			style={{
				colorScheme: 'dark',
				fontFamily: prompt.style.fontFamily,
			}}>
			<Suspense>
				<GoogleAnalytics
					GA_MEASUREMENT_ID={
						SEO_DEFAULT_VALUES.verification.google_analytics_tag
					}
				/>
			</Suspense>
			<body className=' bg-background'>
				<MetaChatButton />

				<ThemesProvider>
					<Navbar
						brandIcon={
							<span className='lg:text-8xl text-7xl w-full h-full text-text'>
								<BrandLogo />
							</span>
						}
						navLinks={[
							{ text: 'home', href: '/' },
							{ text: 'services', href: '/services' },
							{ text: 'about', href: '/about' },
							{
								text: 'contact',
								href: '#section-contact_form',
							},
						]}
						mobileNavbar={
							<MobileNavbar
								brandIcon={
									<span className='md:text-7xl text-6xl w-full h-full text-text'>
										<BrandLogo />
									</span>
								}
								navLinks={[
									{ text: 'home', href: '/' },
									{ text: 'services', href: '/services' },
									{ text: 'about', href: '/about' },
									{ text: 'contact', href: '#section-contact_form' },
								]}
							/>
						}
					/>
					{children}

					<footer className='main-padding-x flex flex-col items-center text-center text-text gap-4 pb-16'>
						<div className='flex flex-col items-center gap-2'>
							<Link
								href={`/`}
								className='text-7xl text-primary'>
								<BrandLogo />
							</Link>
							<span className='text-sm'>
								Elevating your business with our scalable revenue
								framework
							</span>
						</div>
						<span className='text-xs font-light'>
							© 2024 sigmamarketing.co.uk All rights reserved.
						</span>
					</footer>

					{/* <CookieBanner /> */}
				</ThemesProvider>
			</body>
		</html>
	);
}
