import Section from '../components/containers/Section';
import FloatingImageWithLink from '../components/containers/FloatingImageWithLink';
import SideTextContainer from '../components/containers/SideTextContainer';
import FormContainer from '../components/containers/FormContainer';
import Collapsibles from '../components/ui/Collapsibles';
import FloatingImageWithText from '../components/containers/FloatingImageWithText';
import { Metadata } from 'next';
import { SEO_DEFAULT_VALUES } from '@/utils/configs/SEO';

export const metadata: Metadata = {
	title: `About | ${SEO_DEFAULT_VALUES.brand_name} `,
	description: `Finding a team that you can trust to deliver exceptional work every time and be available when you call is a hard and frustrating task.
		These attributes are especially important during the initial growth and scaling phases of a business. This is why it's in our culture to be our client's number one supporter and consider their company like ours. When Sigma was born, we grew to become a digital marketing company that is managed by a team of carefully selected professionals with one primary objective... Help you reach your business goals!`,
	alternates: {
		canonical: `/about`,
	},
};

export default function About() {
	return (
		<main className=' min-h-screen'>
			<Section id='section-about-us'>
				<div className='flex flex-col items-center w-full h-fit gap-16'>
					<div className='flex flex-col items-center'>
						<h3 className='text-3xl font-medium'>About Us</h3>
						<h4 className='text-2xl font-normal'>
							We help your ads get clicks
						</h4>
					</div>
					<FloatingImageWithText
						imageFloats='Left'
						content={{
							Heading: `Finding a team that you can trust to deliver exceptional work every time and be available when you call is a hard and frustrating task.`,
							subHeading: ``,
							paragraph: `These attributes are especially important during the initial growth and scaling phases of a business. This is why it's in our culture to be our client's number one supporter and consider their company like ours.
							
							When Sigma was born, we grew to become a digital marketing company that is managed by a team of carefully selected professionals with one primary objective... Help you reach your business goals!`,
							imageUrl: `/ads images/company.png`,
						}}
					/>
					<FloatingImageWithText
						imageFloats='Right'
						content={{
							Heading: `What do our clients say`,
							subHeading: ``,
							paragraph: `Very Responsive and passionate about their work.
							Within a month, they 7X our customers that are now paying us on monthly subscriptions.They generated us a lot of reviews to boos our reputation`,
							imageUrl: `/ads images/group work.png`,
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
