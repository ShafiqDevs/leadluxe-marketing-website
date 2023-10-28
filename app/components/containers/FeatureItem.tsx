import { title } from 'process';
import React, { ReactNode } from 'react';

type Props = {
	icon: ReactNode;
	Title: string;
	text: string;
};

const FeatureItem = ({ Title, icon, text }: Props) => {
	return (
		<div className='flex flex-col text-primary w-full max-w-[50ch] text-center gap-4'>
			<span className='text-7xl'>{icon}</span>
			<div className='flex flex-col  gap-1'>
				<h3 className='text-3xl font-medium whitespace-nowrap'>
					{Title}
				</h3>
				<p className='text-text text-base font-light'>{text}</p>
			</div>
		</div>
	);
};

export default FeatureItem;
