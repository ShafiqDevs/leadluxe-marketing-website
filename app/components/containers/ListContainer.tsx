import React, { ReactNode } from 'react';
import ListItem from '../ui/ListItem';
import { BsCheck2 } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	flexDirection: 'column' | 'row';
	items: string[];
};

const ListContainer = ({ flexDirection, items }: Props) => {
	return (
		<ul
			style={{ display: 'flex' }}
			className='flex mx-auto lg:mx-0 justify-start items-start flex-wrap flex-col  lg:flex-row  text-center gap-3 font-light'>
			{items.map((item) => (
				<ListItem
					key={uuidv4()}
					icon={<BsCheck2 />}
					iconClassnames='text-2xl text-accent'
					text={item}
				/>
			))}
		</ul>
	);
};

export default ListContainer;
