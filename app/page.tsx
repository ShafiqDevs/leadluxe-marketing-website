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
import FormContainer from './components/containers/FormContainer';
import { Metadata } from 'next';
import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';
import Link from 'next/link';

export const metadata: Metadata = {
	title: `Home | ${SEO_DEFAULT_VALUES.brand_name} `,
	description:
		'Grow your customer base and be ahead of the competition. By leveraging the latest cutting technology and social media marketing',
	alternates: {
		canonical: `/`,
	},
};

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<Section id='section-hero'>
				<div className='grid grid-flow-row lg:grid-flow-col grid-cols-7 items-center w-full h-full gap-y-16 lg:gap-x-4'>
					{/* hero header */}
					<div className='col-span-7 lg:col-span-3 flex flex-col items-start gap-5 '>
						<div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-3'>
							<h1 className='text-5xl font-semibold w-full'>
								Grow your customer base and be ahead of the
								competition
							</h1>
							<h2 className='text-2xl'>
								By leveraging the latest cutting technology and social
								media marketing
							</h2>
						</div>
						<Link
							href={`#section-contact_form`}
							className='px-2 py-3 mx-auto lg:mx-0 rounded-md bg-primary hover:bg-primary/90 text-base font-normal shadow-lg hover:shadow-primary/30 transition-all duration-300'>
							GET FREE CONSULTATION
						</Link>
						<ListContainer
							flexDirection='row'
							items={[
								'High sales',
								'Earn your time back',
								'Automated process',
							]}
						/>
					</div>
					{/* hero image */}
					<div className='col-span-7 lg:col-span-4 flex justify-center lg:justify-end items-center w-full h-full '>
						<div className='relative flex justify-center items-center w-[95%] lg:w-[512px] aspect-square bg-gradient-to-r from-primary/50 to-secondary/50 rounded-tl-[50%] rounded-r-[5%] rounded-bl-[5%] rounded-br-[15%] p-2 mr-7'>
							<Image
								className='w-full h-full object-cover rounded-tl-[50%] rounded-r-[5%] rounded-bl-[5%] rounded-br-[15%]'
								alt='hero Image'
								src={'/ads images/sales.jpg'}
								width={656.8}
								height={448}
							/>
							<Image
								className='absolute object-cover w-64 aspect-auto shadow-md shadow-text/20 rounded-xl right-0 lg:-right-7 top-0
								'
								alt='new leads flow with sigma marketing'
								src={'/ads images/new_leads_ad.png'}
								width={1024}
								height={423.06}
							/>
							<Image
								className='absolute object-cover w-52 aspect-auto shadow-md shadow-text/20 rounded-xl left-0 lg:-left-7 bottom-0
								'
								alt='excellence of stats with sigma marketing'
								src={'/ads images/stats_ad.png'}
								width={512}
								height={593.32}
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section id='section-partners'>
				<PartnersContainer>
					{/* image 1 */}
					<div className='flex items-center w-full lg:w-fit gap-3'>
						<Image
							className='w-20 aspect-auto'
							alt='Brand logo - Overnightly working with sigma marketing'
							src={'/partners logos/Brand logo - Overnightly.png'}
							width={339}
							height={106}
						/>
						<div className='flex flex-col'>
							<span className='text-text text-2xl font-light'>
								Overnightly
							</span>
						</div>
					</div>
					{/* image 2 */}
					<div className='flex items-center w-full lg:w-fit gap-3'>
						<Image
							className='w-20 aspect-auto'
							alt='Brand logo - Parallel Portals working with sigma marketing'
							src={
								'/partners logos/Brand logo - Parallel Portals.png'
							}
							width={339}
							height={106}
						/>
						<div className='flex flex-col'>
							<span className='text-text text-2xl font-light'>
								Parallel Portals
							</span>
							<span className='text-text text-sm font-light '>
								Digital Art
							</span>
						</div>
					</div>
					{/* image 3 */}
					<div className='flex items-center w-full lg:w-fit gap-3'>
						<Image
							className='w-20 aspect-auto'
							alt='Brand logo - Prim ShortStays working with sigma marketing'
							src={'/partners logos/Brand logo - Prim ShortStays.png'}
							width={339}
							height={106}
						/>
						<div className='flex flex-col'>
							<span className='text-text text-2xl font-light'>
								Prim ShortStays
							</span>
							<span className='text-text text-sm font-light '></span>
						</div>
					</div>
					{/* image 4 */}
					<div className='flex items-center w-full lg:w-fit gap-3'>
						<Image
							className='w-20 aspect-auto'
							alt='Brand logo - WizardTools working with sigma marketing'
							src={'/partners logos/Brand logo - WizardTools.png'}
							width={339}
							height={106}
						/>
						<div className='flex flex-col'>
							<span className='text-text text-2xl font-light'>
								Wizard Tools
							</span>
							<span className='text-text text-sm font-light '>
								Play Smart
							</span>
						</div>
					</div>
				</PartnersContainer>
			</Section>

			<Section id='section-ad-copy-1'>
				<div className='flex flex-col gap-24'>
					{/* ad section 1 */}
					<FloatingImageWithText
						imageFloats='Left'
						content={{
							Heading:
								'You have a brilliant plan.. And you need to generate new connections, leads and exposure?',
							subHeading: 'Then this is definitely what you need',
							paragraph:
								"You realise that working 'in the business' to continuously improve your product or service and trying to optimise your conversions, learning new strategies and staying on top of the trends is impossible without support",
							imageUrl: `/ads images/man with laptop.png`,
						}}
					/>
					{/* ad section 2 */}
					<FloatingImageWithText
						imageFloats='Right'
						content={{
							Heading:
								'If this ONE thing can help your competitors 10X their revenue when executed correctly..',
							subHeading: 'It certainly can help your business too',
							paragraph:
								'The potential of social media reach through paid ads is massive and a lot of businesses in your niche are ignoring it due to lack of knowledge. Social media platforms have millions of users that are active everyday and with the right strategy you can tap into this large pool of users and monetise this reach and achieve high profits.',
							imageUrl: `/ads images/man with laptop and coffee.png`,
						}}
					/>
				</div>
			</Section>

			<Section id='section-benefits'>
				<BenefitsContainer>
					<FeatureItem
						key={uuidv4()}
						icon={<SalesUpIcon />}
						Title='High Sales'
						text='Increased sales through improved customer experience journey designed to convert'
					/>
					<FeatureItem
						key={uuidv4()}
						icon={<AutomatedIcon />}
						Title='Automated process'
						text='Leverage the power of AI tools and social media technologies '
					/>
					<FeatureItem
						key={uuidv4()}
						icon={<CalendarIcon />}
						Title='Earn back your time'
						text='Let our team take care of the time consuming tasks and allow you to work on your business instead of working in your business'
					/>
				</BenefitsContainer>
			</Section>

			<Section id='section-why-us'>
				<div className='flex flex-col items-center gap-4 w-full h-fit text-center bg-secondary p-16 lg:p-24 rounded-lg'>
					<h3 className='text-3xl lg:max-w-[50ch] font-light'>
						Why us
					</h3>
					<h4 className='text-4xl lg:max-w-[50ch] font-medium'>
						Put us to work. Generate results while you are relaxing
					</h4>
				</div>
			</Section>

			<Section id='section-how-it-works'>
				<div className='flex flex-col items-center w-full h-fit gap-16'>
					<h2 className='text-3xl font-medium'>How it works</h2>
					<FloatingImageWithLink
						content={{
							Heading: 'Easy Setup',
							subHeading:
								"Once we get access, you're good to go. No hassle or code required",
							paragraph:
								'During the onboarding meeting, your dedicated account manager will get the necessary access to create, manage, and scale your ads.',
							link: { text: 'Get free consultation', url: '' },
							image: {
								main: {
									url: '/ads images/women with notebook.jpg',
									className:
										'w-full lg:w-80 aspect-video lg:aspect-[17/21] rounded-xl overflow-hidden',
								},
								floating: {
									url: '/ads images/ad-steps-accountmanager.png',
								},
							},
						}}
					/>
					<FloatingImageWithLink
						imageFloats='Right'
						content={{
							Heading: 'Smart budgeting',
							subHeading:
								"Sigma's ad experts, will guide the budget strategy to achieve your desired goals and scale.",
							paragraph:
								'We use both Performance-based budgeting and Dynamic resources allocation, two proven strategies in order to optimise the performance of your ads based on the budget of your choosing.',
							link: { text: 'Get free consultation', url: '' },
							image: {
								main: {
									url: '/ads images/ad-sales-woment.jpg',
									className:
										'w-full lg:w-80 aspect-video lg:aspect-[17/21] rounded-xl overflow-hidden',
								},
								floating: {
									url: '/ads images/ads-newleads-accountmanager.png',
								},
							},
						}}
					/>
				</div>
			</Section>

			<Section id='section-testimonials'>
				<div className='flex flex-col gap-16 w-full h-fit'>
					<div className='flex flex-col items-center'>
						<h3 className='text-3xl font-medium'>Testimonials</h3>
						<h4 className='text-2xl font-normal'>
							What our clients are saying about our work
						</h4>
					</div>
					<DraggableCarousel
						carousel_items={[
							<ReviewCard
								key={uuidv4()}
								profile={{
									imgUrl: '/reviewers images/Ben Kirby.png',
									name: 'Ben Kirby',
									title: 'CEO, KirbyOperations',
								}}
								review='I managed to hire my friend to help in the business after the leads started flowing in. Their approach is very effective'
							/>,
							<ReviewCard
								key={uuidv4()}
								profile={{
									imgUrl: '/reviewers images/wizardtools image.png',
									name: 'Wizard Tools',
									title: 'CEO, Wizard-Tools',
								}}
								review='Very Responsive and passionate about their work.
								Within a month, they 7X our customers that are now paying us on monthly subscriptions.They generated us a lot of reviews to boos our reputation'
							/>,
							<ReviewCard
								key={uuidv4()}
								profile={{
									imgUrl: '/reviewers images/oussamasales image.png',
									name: 'Oussama Sales',
									title: 'CEO, LeadsBee',
								}}
								review='I really appreciate your work'
							/>,
							<ReviewCard
								key={uuidv4()}
								profile={{
									imgUrl:
										'/reviewers images/plansio_central image.png',
									name: 'Plansio Central',
									title: 'Community Manager, Plansio Central',
								}}
								review='Their work is so clean and refined nicely, We’ve always wanted to create a community full of designers and we like your work, great job!'
							/>,
						]}
					/>
				</div>
			</Section>

			<Section id='section-contact_form'>
				<SideTextContainer
					textDirection='Left'
					Title='CONTACT'
					subTitle='Send us an email with any question you may have '>
					<FormContainer />
				</SideTextContainer>
			</Section>

			<Section id='section-faq'>
				<SideTextContainer
					textDirection='Left'
					Title='FAQ'
					subTitle='Answers to some questions you might have'>
					<Collapsibles
						questions={[
							{
								question: 'How much should I spend to get results?',
								answer:
									'We reverse engineer that with you when we understand your goals and which marketing service you want help with.\n\nThe answer will be concluded from a combination of conversion volume, cost per conversion and ROI.\n\nFor example for paid advertising, if you want 20 conversions per day and the average cost per conversion is $10, then your marketing budget would need to be $200/day.',
							},
							{
								question: 'How much do you charge?',
								answer:
									'Once we understand the type of marketing services you need help with and your specific goals, then we can create options around timelines, strategies, and team sizes for you to decide.\n\nOur goal is to generate a positive ROI within the first 45 days of working with our team.',
							},
							{
								question: 'How long until you launch?',
								answer:
									'Depending on the service that you signed up for, your account manager typically starts your onboarding with 24 hours of signing up. Expect your marketing to start within 2 business days after the onboarding. ',
							},
							{
								question: 'How long until I get results?',
								answer:
									'The great thing about digital marketing and a fast turn around time is that you could start seeing results immediately. For example, when we launch your ads, conversions typically start happening within 24 hours.\n\nWe set performance based goals for all our clients monthly',
							},
							{
								question: 'How long is the contract?',
								answer:
									"We don't have contracts. We believe that there is no reason to lock you into a contract if you're not happy. But also because our clients never cancel!",
							},
						]}
					/>
				</SideTextContainer>
			</Section>
		</main>
	);
}
