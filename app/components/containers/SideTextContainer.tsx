import { title } from 'process';
import React, { ReactNode } from 'react';

type Props = {
	Title?: string;
	subTitle?: string;
	children: ReactNode;
	textDirection: 'Left' | 'Right';
};

const SideTextContainer = ({
	children,
	Title,
	subTitle,
	textDirection,
}: Props) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 w-full h-fit gap-16 lg:gap-0 '>
			<div
				className={`flex w-fit h-full ${
					textDirection === 'Right' && 'lg:order-last lg:mx-auto'
				}`}>
				<div
					className={`flex flex-col justify-center col-span-1 text-center lg:text-start`}>
					<h3 className='text-3xl font-medium w-fit'>{Title}</h3>
					<h4 className='text-xl font-light w-fit '>{subTitle}</h4>
				</div>
			</div>
			<div className='w-full h-full'>{children}</div>
		</div>
	);
};

export default SideTextContainer;
