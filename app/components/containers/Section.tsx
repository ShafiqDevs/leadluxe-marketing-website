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
			className=' relative  main-padding-x my-32 bg-background text-text w-full h-fit'>
			{children}
			{bgShapes && (
				<>
					<BGCircle classNames=' -z-[1] blur-lg bg-accent/10 top-0 left-0 -translate-x-1/2   w-[300px] h-[300px] md:w-[400px] md:h-[400px]' />
					<BGCircle classNames=' -z-[1] blur-lg bg-accent/10 bottom-0 right-0 translate-x-1/2   w-[300px] h-[300px] md:w-[400px] md:h-[400px]' />
				</>
			)}
		</section>
	);
};

export default Section;
