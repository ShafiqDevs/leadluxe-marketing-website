import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const BenefitsContainer = ({ children }: Props) => {
	return (
		<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between items-center gap-4 w-full'>
			{children}
		</div>
	);
};

export default BenefitsContainer;
