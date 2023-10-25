import React, { ReactNode } from 'react';

type Props = {
	text: string;
	icon: ReactNode;
	iconClassnames: string;
};

const ListItem = ({ text, icon, iconClassnames }: Props) => {
	return (
		<li className='flex justify-start items-center gap-2'>
			<span className={`${iconClassnames} w-fit`}>{icon}</span>
			<span className=' w-fit'>{text}</span>
		</li>
	);
};

export default ListItem;
