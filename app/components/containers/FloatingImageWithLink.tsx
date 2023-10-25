import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	imageFloats?: 'Left' | 'Right';
	content: {
		Heading?: string;
		subHeading?: string;
		subHeading2?: string;
		paragraph?: string;
		imageUrl?: { main: string; floating?: string };
		link: { text: string; url: string };
	};
};

const FloatingImageWithLink = ({
	imageFloats = 'Left',
	content,
}: Props) => {
	return (
		<div className='flex flex-col items-center lg:flex-row lg:items-start  w-full h-fit gap-6'>
			<div
				className={`relative 
				${imageFloats === 'Right' && 'lg:order-last'}`}>
				<div
					className={` absolute left-2 bottom-2 lg:bottom-auto  lg:top-2 w-60 object-cover rounded-xl overflow-hidden`}>
					{content.imageUrl?.floating && (
						<Image
							className='object-cover w-full h-full'
							alt=''
							src={content.imageUrl.floating}
							width={512}
							height={512}
						/>
					)}
				</div>

				<div
					className={` w-full lg:w-80 aspect-video lg:aspect-[17/21] rounded-xl overflow-hidden`}>
					{content.imageUrl?.main && (
						<Image
							className='object-cover w-full h-full'
							alt=''
							src={content.imageUrl.main}
							width={512}
							height={512}
						/>
					)}
				</div>
			</div>
			<div className='flex flex-col w-full h-fit'>
				<div className='flex flex-col w-full xl:w-2/3 gap-5 text-text'>
					<h2 className='text-3xl font-bold'>
						{content.Heading}
					</h2>
					<div className='flex flex-col w-full gap-1'>
						<h3 className='text-2xl font-semibold'>
							{content.subHeading}
						</h3>
						<h3 className='text-xl'>{content.paragraph}</h3>
					</div>
					<Link
						href={content.link.url}
						className=' w-fit py-2 px-3 rounded-md text-base font-semibold bg-primary hover:bg-primary/30 '>
						{content.link.text}
					</Link>
				</div>
				<p className='text-base'></p>
			</div>
		</div>
	);
};

export default FloatingImageWithLink;
