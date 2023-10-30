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
import { Social_Links } from '@/utils/configs/socials';
import GoogleAnalytics from './components/containers/GoogleAnalytics';
import CookieBanner from './components/ui/CookieBanner';
import MetaChatButton from './components/ui/MetaChatButton';

const prompt = Prompt({
	weight: ['300', '400', '500', '600'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL(SEO_DEFAULT_VALUES.base_url),
	title: `Business growth | ${SEO_DEFAULT_VALUES.brand_name}`,
	description: 'Generated by create next app',
	verification: {
		google: SEO_DEFAULT_VALUES.verification.google_search_console,
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
			<GoogleAnalytics
				GA_MEASUREMENT_ID={
					SEO_DEFAULT_VALUES.verification.google_analytics_tag
				}
			/>
			<MetaChatButton />

			<body className=' bg-background'>
				<ThemesProvider>
					<Navbar
						brandIcon={
							<span className='md:text-7xl text-6xl w-full h-full text-text'>
								<BrandLogo />
							</span>
						}
						navLinks={[
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
									{ text: 'services', href: '/services' },
									{ text: 'about', href: '/about' },
									{ text: 'contact', href: '#section-contact_form' },
								]}
							/>
						}
					/>
					{children}

					<footer className='main-padding-x py-8 flex flex-col items-center gap-4 w-full h-fit bg-secondary/10 text-base'>
						{/* container 1 */}
						<div
							className='flex flex-col items-start gap-8 w-full
					lg:flex-row p-4'>
							<div className='flex flex-col items-start gap-1'>
								<Link
									href={`/`}
									className='text-5xl'>
									<BrandLogo />
								</Link>
								<span className='text-sm'>
									Elevating your business with our scalable revenue
									framework
								</span>
							</div>
							<div
								className='flex justify-start w-full
						lg:justify-end'>
								<div className='flex flex-col lg:flex-row gap-4 flex-wrap '>
									{/* column 1 */}
									<div className='col-span-1 flex flex-col items-start '>
										<h4 className='text-lg font-medium'>Social</h4>
										<Link
											className=' text-base font-light hover:underline'
											href={`mailto:${config_contact_details.Email.defaultEmail}`}>
											{config_contact_details.Email.defaultEmail}
										</Link>
										<div className='flex items-center gap-2'>
											<Link
												href={Social_Links.Facebook}
												target='_blank'
												className='text-2xl hover:text-accent'>
												<BiLogoFacebookCircle />
											</Link>
											<Link
												href={Social_Links.Instagram}
												target='_blank'
												className='text-2xl hover:text-accent'>
												<AiFillInstagram />
											</Link>
										</div>
									</div>
									{/* column 2 */}
									<div className='col-span-1 flex flex-col items-start'>
										<h4 className='text-lg font-medium'>
											Quick Links
										</h4>
										<Link
											className='text-base font-light hover:underline'
											href={`/about`}>
											About
										</Link>
										<Link
											className='text-base font-light hover:underline'
											scroll={false}
											href={`#section-contact_form`}>
											Contact
										</Link>
										<Link
											className='text-base font-light hover:underline'
											href={`/terms-and-conditions`}>
											Terms & Conditions
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* container 2 */}
						<div className='w-full h-fit border-t border-black/30 dark:border-white/30 p-4'>
							<span className='text-xs font-light'>
								© 2023 sigmamarketing.co.uk All rights reserved.
							</span>
						</div>
					</footer>
					{/* <CookieBanner /> */}
					<MetaChatButton/>
				</ThemesProvider>
			</body>
		</html>
	);
}
