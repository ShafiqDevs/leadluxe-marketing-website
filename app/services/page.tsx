import Section from '../components/containers/Section';
import FloatingImageWithLink from '../components/containers/FloatingImageWithLink';
import SideTextContainer from '../components/containers/SideTextContainer';
import FormContainer from '../components/containers/FormContainer';
import Collapsibles from '../components/ui/Collapsibles';
import { Metadata } from 'next';
import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';

export const metadata: Metadata = {
	title: `Services | ${SEO_DEFAULT_VALUES.brand_name} `,
	description: `Rev up your brand's success with our "Scalable Revenue Framework" powered paid advertising. Our expert campaigns ensure an amplified online presence and soaring conversion rates, creating a dynamic pathway for scalable revenue growth. Reach your target audience precisely when it counts`,
	alternates: {
		canonical: `/services`,
	},
};

export default function Services() {
	return (
		<main className=' min-h-screen'>
			<Section id='section-paid-advertising'>
				<div className='flex flex-col items-center w-full h-fit gap-16'>
					<div className='flex flex-col items-center'>
						<h2 className='text-3xl font-bold'>Services</h2>
						<h3 className='text-2xl'>
							How we provide you with value
						</h3>
					</div>
					<FloatingImageWithLink
						imageFloats='Right'
						content={{
							Heading: 'Paid Advertising',
							subHeading: 'It certainly can help your business too',
							paragraph: `Rev up your brand's success with our "Scalable Revenue Framework" powered paid advertising. Our expert campaigns ensure an amplified online presence and soaring conversion rates, creating a dynamic pathway for scalable revenue growth. Reach your target audience precisely when it counts`,
							image: {
								main: {
									url: '/ads images/auto budgeting.png',
									className: 'overflow-hidden',
								},
							},
							link: {
								text: 'Get free consultation',
								url: 'https://calendly.com/discovery-time/30min',
								newTab: true,
							},
						}}
					/>
					<FloatingImageWithLink
						imageFloats='Left'
						content={{
							Heading: 'Ads Design Templates',
							subHeading:
								"Unlock your brand's full potential. Let us handle the creative heavy lifting while you focus on what matters most – your business",
							paragraph:
								'Our expert designers craft stunning ad creatives tailored to your brand, ensuring a seamless and visually captivating experience for your audience. Elevate your advertising game effortlessly and leave the design worries to us.',
							image: {
								main: {
									url: '/ads images/ad design template.png',
									className: 'overflow-hidden',
								},
							},
							link: {
								text: 'Get free consultation',
								url: 'https://calendly.com/discovery-time/30min',
								newTab: true,
							},
						}}
					/>
					<FloatingImageWithLink
						imageFloats='Right'
						content={{
							Heading: 'Efficient Analytics',
							subHeading: 'It is no coincidence. It is a data game',
							paragraph:
								'We analyse your audience buyer behaviour and execute the right retargeting plan for enhanced conversion rates',
							image: {
								main: {
									url: '/ads images/analytics.png',
									className: 'overflow-hidden',
								},
							},
							link: {
								text: 'Get free consultation',
								url: 'https://calendly.com/discovery-time/30min',
								newTab: true,
							},
						}}
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
