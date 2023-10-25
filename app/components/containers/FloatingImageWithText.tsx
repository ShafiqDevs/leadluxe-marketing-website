import Image from 'next/image';
import React from 'react';

type Props = {
	imageFloats?: 'Left' | 'Right';
	content: {
		Heading?: string;
		subHeading?: string;
		subHeading2?: string;
		paragraph?: string;
	};
};

const FloatingImageWithText = ({
	imageFloats = 'Left',
	content,
}: Props) => {
	return imageFloats === 'Left' ? (
		<div className='grid grid-cols-6 md:flex-row items-center gap-x-5 gap-y-11 w-full h-fit'>
			<Image
				className='col-span-5 md:col-span-3 w-auto aspect-auto mx-auto md:mx-0'
				alt='your business problems solved by sigma marketing .co.uk'
				src={'/ads images/man with laptop.png'}
				width={427}
				height={392}
			/>
			<div className='col-span-5 md:col-span-3 flex flex-col w-full gap-4 text-text text-start '>
				<div className='flex flex-col w-full gap-1 text-text'>
					<h2 className='text-3xl font-semibold'>
						{content.Heading}
					</h2>
					<h3 className='text-xl font-semibold'>
						{content.subHeading}
					</h3>
					<h3 className='text-xl font-semibold'>
						{content.subHeading2}
					</h3>
				</div>
				<p className='text-base'>{content.paragraph}</p>
			</div>
		</div>
	) : (
		<div className='grid grid-cols-6 md:flex-row items-center gap-x-5 gap-y-11 w-full h-fit'>
			<Image
				className=' col-span-5 md:col-span-3 w-auto aspect-auto mx-auto lg:mx-0 lg:ml-auto md:order-last'
				alt='your business problems solved by sigma marketing .co.uk'
				src={'/ads images/man with laptop and coffee.png'}
				width={427}
				height={392}
			/>
			<div className='col-span-5 md:col-span-3 flex flex-col w-full gap-4 text-text text-start '>
				<div className='flex flex-col w-full gap-1 '>
					<h2 className='text-3xl font-semibold'>
						{content.Heading}
					</h2>
					<h3 className='text-xl font-semibold'>
						{content.subHeading}
					</h3>
					<h3 className='text-xl font-semibold'>
						{content.subHeading2}
					</h3>
				</div>
				<p className='text-base'>{content.paragraph}</p>
			</div>
		</div>
	);
};

export default FloatingImageWithText;
