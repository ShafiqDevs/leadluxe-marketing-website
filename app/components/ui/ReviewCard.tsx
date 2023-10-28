import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

type Props = {
	profile: { name: string; title: string; imgUrl: string };
	review: string;
};

const ReviewCard = ({ profile, review }: Props) => {
	return (
		<div className='flex flex-col items-start shrink-0 w-96 aspect-square text-text rounded-md px-4 py-16 gap-4 bg-black/[3%] dark:bg-white/[3%]'>
			<div className='flex items-center justify-start gap-4'>
				<Image
					className='w-20 aspect-square object-cover rounded-full border-2 border-accent'
					alt=''
					src={profile.imgUrl}
					width={512}
					height={512}
				/>
				<div className='flex flex-col'>
					<h3 className='text-xl font-medium'>{profile.name}</h3>
					<span className='text-sm font-light text-text/30'>
						{profile.title}
					</span>
				</div>
			</div>
			<div className='flex justify-center items-center w-fit h-fit '>
				<span className='text-3xl text-accent'>
					<AiFillStar />
				</span>
				<span className='text-3xl text-accent'>
					<AiFillStar />
				</span>
				<span className='text-3xl text-accent'>
					<AiFillStar />
				</span>
				<span className='text-3xl text-accent'>
					<AiFillStar />
				</span>
				<span className='text-3xl text-accent'>
					<AiFillStar />
				</span>
			</div>
			<p className='text-sm font-light max-w-[50ch]'>
				&quot;{review}&quot;
			</p>
		</div>
	);
};

export default ReviewCard;
