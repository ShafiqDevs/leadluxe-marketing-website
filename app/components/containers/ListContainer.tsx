import React, { ReactNode } from 'react';
import ListItem from '../ui/ListItem';
import { BsCheck2 } from 'react-icons/bs';

type Props = {
	flexDirection: 'column' | 'row';
	items: string[];
};

const ListContainer = ({ flexDirection, items }: Props) => {
	return (
		<ul
			style={{ display: 'flex' }}
			className='flex mx-auto lg:mx-0 justify-start items-start flex-wrap flex-col  lg:flex-row  text-center gap-3'>
			{items.map((item) => (
				<ListItem
					icon={<BsCheck2 />}
					iconClassnames='text-2xl text-accent'
					text={item}
				/>
			))}
		</ul>
	);
};

export default ListContainer;
