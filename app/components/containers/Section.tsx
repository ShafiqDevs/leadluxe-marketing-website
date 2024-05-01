import React, { ReactNode } from 'react';
import BGCircle from '../ui/BGCircle';

type Props = {
	id?: string;
	children?: ReactNode;
	bgShapes?: boolean;
};

const Section = ({ id, children, bgShapes }: Props) => {
	return (
		<section
			id={id}
			className='scroll-smooth relative  main-padding-x xmy-32 bg-background text-text w-full h-fit'>
			{children}
		</section>
	);
};

export default Section;
