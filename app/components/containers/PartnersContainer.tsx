import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const PartnersContainer = ({ children }: Props) => {
	return (
		<div className='flex justify-center w-full py-5 bg-secondary/30 rounded-md '>
			<div className='flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center w-fit h-fit'>
				{children}
			</div>
		</div>
	);
};

export default PartnersContainer;
