import Image from 'next/image';
import Section from './components/containers/Section';
import ListContainer from './components/containers/ListContainer';
import FloatingImageWithText from './components/containers/FloatingImageWithText';
import FeatureItem from './components/containers/FeatureItem';
import SalesUpIcon from './components/icons/SalesUpIcon';
import AutomatedIcon from './components/icons/AutomatedIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import FloatingImageWithLink from './components/containers/FloatingImageWithLink';
import ReviewCard from './components/ui/ReviewCard';
import DraggableCarousel from './components/containers/DraggableCarousel';
import { v4 as uuidv4 } from 'uuid';
import BenefitsContainer from './components/containers/BenefitsContainer';
import PartnersContainer from './components/containers/PartnersContainer';
import SideTextContainer from './components/containers/SideTextContainer';
import Collapsibles from './components/ui/Collapsibles';
import { Metadata } from 'next';
import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';
import Link from 'next/link';
import SemanticHtmlForm from './components/ui/SemanticHtmlForm';

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

export default function Home() {
	return (
		<main className='flex flex-col gap-36 min-h-screen'>
			<section
				id='section-hero'
				className='scroll-smooth'>
				<div
					style={{
						backgroundImage: `url("/ads images/heroImg.webp")`,
					}}
					className='relative flex justify-center items-center w-full h-screen bg-no-repeat main-padding-x  bg-cover'>
					<div className='absolute w-full h-full top-0 left-0 bg-black/80'></div>
					<div className=' flex flex-col justify-center items-center gap-4 p-2 z-[2]'>
						<span className='text-2xl font-light'>
							Effortless Business Growth
						</span>
						<h1 className='lg:text-7xl text-5xl text-center max-w-[75ch]'>
							We Generate{' '}
							<span className='font-semibold text-primary'>
								Quote-Ready
							</span>{' '}
							Home Improvement{' '}
							<span className='font-semibold text-primary'>
								{' '}
								Leads For You
							</span>
						</h1>
						<span className='text-2xl'>
							No Heavy Lifting Required!
						</span>
						<Link
							className='text-2xl rounded-full bg-primary font-semibold px-6 py-4 mt-4 '
							href={'#section-contact-form'}>
							Get More Leads
						</Link>
						<Image
							className='w-24 h-24'
							alt='swipe down to read more'
							title='Seipe down to read more'
							src={`/swipe.gif`}
							width={150}
							height={150}
						/>
					</div>
				</div>
			</section>

			<Section id='section-who-are-we'>
				<div className='flex flex-col items-center justify-center gap-12 text-center'>
					<h3 className='text-5xl'>
						Who Are <span className='text-primary'>We</span>?
					</h3>
					<p className='text-xl max-w-[70ch] font-light'>
						We&apos;re a Nottingham-based agency that helps home
						improvement companies by delivering top-tier, quote-ready
						leads through strategic advertising on popular social
						media sites. Our targeted approach not only frees you up
						to concentrate on your work, but also ensures your growth
						is driven by genuinely interested clients, making your
						business growth smooth and efficient.
					</p>
				</div>
			</Section>

			<Section id='section-our-process'>
				<div className='flex flex-col items-start justify-center gap-12 w-full h-fit text-center'>
					<h3 className='text-5xl w-full'>
						Our <span className='text-primary'>Process</span>
					</h3>
					<div className='grid max-md:grid-rows-3 lg:grid-cols-3 gap-4 w-full h-fit'>
						<div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-4'>
							<span className='flex items-center justify-center w-12 h-12 aspect-square rounded-full text-2xl font-extrabold bg-primary'>
								1
							</span>
							<div className='flex flex-col'>
								<span className='text-center lg:text-start text-2xl font-semibold'>
									Gather Content
								</span>
								<p className='text-center lg:text-start font-light'>
									In the initial step, we collect visuals that
									highlight your craftsmanship. These form the
									foundation of our strategy, serving to attract a
									greater number of potential clients to your
									business.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-4'>
							<span className='flex items-center justify-center w-12 h-12 aspect-square rounded-full text-2xl font-extrabold bg-primary'>
								2
							</span>
							<div className='flex flex-col'>
								<span className='text-center lg:text-start text-2xl font-semibold'>
									Launch Ads
								</span>
								<p className='text-center lg:text-start font-light'>
									Next, we launch ads based on the content we&apos;ve
									collected. These ads are strategically designed and
									placed on popular social media platforms to capture
									clients attention.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-4'>
							<span className='flex items-center justify-center w-12 h-12 aspect-square rounded-full text-2xl font-extrabold bg-primary'>
								3
							</span>
							<div className='flex flex-col'>
								<span className='text-center lg:text-start text-2xl font-semibold'>
									Generate Leads
								</span>
								<p className='text-center lg:text-start font-light'>
									Finally, we collect information from individuals who
									are genuinely interested in your services.
									Prioritising quote-ready leads and eliminating tire
									kickers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<section
				id='section-contact-form'
				className='scroll-smooth'>
				<div
					style={{
						backgroundImage: `url("/ads images/renovation.webp")`,
					}}
					className='relative flex justify-center items-center w-full h-screen bg-no-repeat main-padding-x  bg-cover'>
					<div className='absolute w-full h-full top-0 left-0 bg-black/80' />
					<div className='flex flex-col justify-center items-center gap-12 w-full text-center z-[2]'>
						<div className='flex flex-col justify-center items-center gap-4'>
							<h3 className='text-center text-5xl'>
								Get 5 New Quote-Ready Leads
							</h3>
							<p className='text-3xl text-primary'>
								Within 30 Days, or You Don’t Pay
							</p>
						</div>
						<div className='bg-background p-6 w-full md:w-[70%] rounded-lg'>
							<SemanticHtmlForm />
						</div>
					</div>
				</div>
			</section>
			<Section id='section-trust-bades'>
				<div className='flex justify-center items-center flex-wrap gap-24 w-full h-fit pb-16'>
					<div className='flex flex-col justify-center items-center gap-4'>
						<Image
							alt='Industry Specialist badge'
							title='Industry Specialist badge'
							className='w-24 h-24'
							src={`/IndustrySpecialists.png`}
							width={150}
							height={150}
						/>
						<span className='text-xl text-center '>
							Industry Specialists
						</span>
					</div>
					<div className='flex flex-col justify-center items-center gap-4'>
						<Image
							alt='Guaranteed Results badge'
							title='Guaranteed Results badge'
							className='w-24 h-24'
							src={`/guarantee.png`}
							width={150}
							height={150}
						/>
						<span className='text-xl text-center '>
							Guaranteed Results
						</span>
					</div>
					<div className='flex flex-col justify-center items-center gap-4'>
						<Image
							alt='Qualified Leads badge'
							title='Qualified Leads badge'
							className='w-24 h-24'
							src={`/QualifiedLeads.png`}
							width={150}
							height={150}
						/>
						<span className='text-xl text-center '>
							Qualified Leads
						</span>
					</div>
				</div>
			</Section>
		</main>
	);
}
