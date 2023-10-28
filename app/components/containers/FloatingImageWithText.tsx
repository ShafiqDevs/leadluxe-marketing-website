import Image from 'next/image';
import React from 'react';

type Props = {
	imageFloats?: 'Left' | 'Right';
	content: {
		Heading?: string;
		subHeading?: string;
		subHeading2?: string;
		paragraph?: string;
		imageUrl: string;
	};
};

const FloatingImageWithText = ({
	imageFloats = 'Left',
	content,
}: Props) => {
	return (
		<div className='grid grid-cols-6 lg:flex-row items-center gap-x-5 gap-y-11 w-full h-fit'>
			<Image
				className={`col-span-6 lg:col-span-3 w-auto aspect-auto mx-auto lg:mx-0
				${imageFloats === 'Left' ? '' : 'lg:order-last lg:ml-auto'}`}
				alt='your business problems solved by sigma marketing .co.uk'
				src={content.imageUrl}
				width={427}
				height={392}
			/>
			<div className='col-span-6 lg:col-span-3 flex flex-col w-full gap-4 text-text text-start '>
				<div className='flex flex-col w-full gap-1 text-text'>
					<h3 className='text-3xl font-medium'>{content.Heading}</h3>
					<h4 className='text-lg font-medium'>
						{content.subHeading}
					</h4>
					{content.subHeading2 && (
						<h4 className='text-lg font-medium'>
							{content.subHeading2}
						</h4>
					)}
				</div>
				<p className='text-base font-light max-w-[55ch]'>
					{content.paragraph}
				</p>
			</div>
		</div>
	);
};

export default FloatingImageWithText;
