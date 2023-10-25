import Image from 'next/image';
import Section from './components/containers/Section';
import ListContainer from './components/containers/ListContainer';
import BGCircle from './components/ui/BGCircle';
import FloatingImageWithText from './components/containers/FloatingImageWithText';
import FeatureItem from './components/containers/FeatureItem';
import { BsGraphUpArrow } from 'react-icons/bs';
import SalesUpIcon from './components/icons/SalesUpIcon';
import AutomatedIcon from './components/icons/AutomatedIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import FloatingImageWithLink from './components/containers/FloatingImageWithLink';
import ReviewCard from './components/ui/ReviewCard';
import Carousel from './components/icons/Carousel';

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<Section id='section-hero'>
				<div className='grid grid-flow-row lg:grid-flow-col lg:grid-cols-7 items-center w-full h-full gap-y-16 lg:gap-x-4'>
					{/* hero header */}
					<div className='col-span-3 flex flex-col items-start gap-5 '>
						<div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-3'>
							<h1 className='text-5xl font-extrabold w-full'>
								Grow your customer base and be ahead of the
								competition
							</h1>
							<p className='text-2xl'>
								By leveraging the latest cutting technology and social
								media marketing
							</p>
						</div>
						<button className='px-2 py-3 mx-auto lg:mx-0 rounded-md bg-primary hover:bg-primary/30'>
							GET FREE CONSULTATION
						</button>
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
					<div className='col-span-4 flex justify-center lg:justify-end items-center w-full h-full '>
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
				<div className='flex justify-center w-full py-5 bg-secondary/30 rounded-md '>
					<div className='flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center w-fit h-fit'>
						{/* image 1 */}
						<div className='flex items-center w-full lg:w-fit gap-3'>
							<Image
								className='w-28 aspect-auto'
								alt='Brand logo - Overnightly working with sigma marketing'
								src={'/partners logos/Brand logo - Overnightly.png'}
								width={339}
								height={106}
							/>
							<div className='flex flex-col'>
								<span className='text-text text-2xl'>
									Overnightly
								</span>
							</div>
						</div>
						{/* image 2 */}
						<div className='flex items-center w-full lg:w-fit gap-3'>
							<Image
								className='w-28 aspect-auto'
								alt='Brand logo - Parallel Portals working with sigma marketing'
								src={
									'/partners logos/Brand logo - Parallel Portals.png'
								}
								width={339}
								height={106}
							/>
							<div className='flex flex-col'>
								<span className='text-text text-2xl'>
									Parallel Portals
								</span>
								<span className='text-text text-base'>
									Digital Art
								</span>
							</div>
						</div>
						{/* image 3 */}
						<div className='flex items-center w-full lg:w-fit gap-3'>
							<Image
								className='w-28 aspect-auto'
								alt='Brand logo - Prim ShortStays working with sigma marketing'
								src={
									'/partners logos/Brand logo - Prim ShortStays.png'
								}
								width={339}
								height={106}
							/>
							<div className='flex flex-col'>
								<span className='text-text text-2xl'>
									Prim ShortStays
								</span>
								<span className='text-text text-base'></span>
							</div>
						</div>
						{/* image 4 */}
						<div className='flex items-center w-full lg:w-fit gap-3'>
							<Image
								className='w-28 aspect-auto'
								alt='Brand logo - WizardTools working with sigma marketing'
								src={'/partners logos/Brand logo - WizardTools.png'}
								width={339}
								height={106}
							/>
							<div className='flex flex-col'>
								<span className='text-text text-2xl'>
									Wizard Tools
								</span>
								<span className='text-text text-base'>
									Play Smart
								</span>
							</div>
						</div>
					</div>
				</div>
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
						}}
					/>
				</div>
			</Section>

			<Section id='section-benefits'>
				<div className='flex flex-col lg:flex-row lg:items-start items-center gap-4 w-full'>
					<FeatureItem
						icon={<SalesUpIcon />}
						Title='High Sales'
						text='Increased sales through improved customer experience journey designed to convert'
					/>
					<FeatureItem
						icon={<AutomatedIcon />}
						Title='Automated process'
						text='Leverage the power of AI tools and social media technologies '
					/>
					<FeatureItem
						icon={<CalendarIcon />}
						Title='Earn back your time'
						text='Let our team take care of the time consuming tasks and allow you to work on your business instead of working in your business'
					/>
				</div>
			</Section>

			<Section id='section-why-us'>
				<div className='flex flex-col w-full h-fit text-center bg-secondary p-24 rounded-lg'>
					<h3 className='text-3xl'>Why us</h3>
					<h2 className='text-4xl font-semibold'>
						Put us to work. Generate results while you're relaxing
					</h2>
				</div>
			</Section>

			<Section id='section-how-it-works'>
				<div className='flex flex-col items-center w-full h-fit gap-24'>
					<h2 className='text-3xl'>How it works</h2>
					<FloatingImageWithLink
						content={{
							Heading: 'Easy Setup',
							subHeading:
								"Once we get access, you're good to go. No hassle or code required",
							paragraph:
								'During the onboarding meeting, your dedicated account manager will get the necessary access to create, manage, and scale your ads.',
							link: { text: 'GET FREE CONSULTATION', url: '' },
							imageUrl: {
								main: '/ads images/women with notebook.jpg',
								floating: '/ads images/ad-steps-accountmanager.png',
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
								'We use both Performance-based budgeting and Dynamic resources allocation i, two proven strategies in order to optimise the performance of your ads based on the budget of your choosing.',
							link: { text: 'GET FREE CONSULTATION', url: '' },
							imageUrl: {
								main: '/ads images/ad-sales-woment.jpg',
								floating:
									'/ads images/ads-newleads-accountmanager.png',
							},
						}}
					/>
				</div>
			</Section>

			<Section id='section-testimonials'>
				<Carousel
					items={[
						<ReviewCard
							profile={{
								imgUrl: '',
								name: 'shafiq belaroussi',
								title: 'CEO, Sigma marketing',
							}}
							review='I managed to hire my friend to help in the business after the
					leads started flowing in. Their approach is very effective'
						/>,
						<ReviewCard
							profile={{
								imgUrl: '',
								name: 'shafiq belaroussi',
								title: 'CEO, Sigma marketing',
							}}
							review='I managed to hire my friend to help in the business after the
				leads started flowing in. Their approach is very effective'
						/>,
						<ReviewCard
							profile={{
								imgUrl: '',
								name: 'shafiq belaroussi',
								title: 'CEO, Sigma marketing',
							}}
							review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
						/>,
						<ReviewCard
							profile={{
								imgUrl: '',
								name: 'shafiq belaroussi',
								title: 'CEO, Sigma marketing',
							}}
							review='I managed to hire my friend to help in the business after the
		leads started flowing in. Their approach is very effective'
						/>,
					]}>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
			leads started flowing in. Their approach is very effective'
					/>
				</Carousel>
				{/* <div className='flex flex-col md:flex-row gap-8'>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
					leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
					leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
					leads started flowing in. Their approach is very effective'
					/>
					<ReviewCard
						profile={{
							imgUrl: '',
							name: 'shafiq belaroussi',
							title: 'CEO, Sigma marketing',
						}}
						review='I managed to hire my friend to help in the business after the
					leads started flowing in. Their approach is very effective'
					/>
				</div> */}
			</Section>
		</main>
	);
}
