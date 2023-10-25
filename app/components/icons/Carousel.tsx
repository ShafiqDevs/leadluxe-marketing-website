'use client';
import { useState, useRef, ReactNode } from 'react';
import { BiArrowBack } from 'react-icons/bi';

type Props = {
	children?: ReactNode;
	items: ReactNode[];
};

const Carousel = ({ children, items }: Props) => {
	const [currentItem, setcurrentItem] = useState(0);

	function slideToPrevItem() {
		if (currentItem === 0) setcurrentItem(items.length - 1);
		else setcurrentItem((prev) => prev - 1);
	}
	function slideToNextItem() {
		if (currentItem === items.length - 1) {
			setcurrentItem(0);
		} else setcurrentItem((prev) => prev + 1);
	}

	return (
		<div className='relative overflow-hidden '>
			<div
				style={{ transform: `translateX(-${currentItem * 100}%)` }}
				className='flex items-center gap-8 transition-transform ease-out duration-500'>
				{children}
			</div>
			<span
				className='absolute left-0 top-1/2  text-3xl rounded-full bg-primary/30 hover:bg-primary p-2 cursor-pointer z-10'
				onClick={slideToPrevItem}>
				<BiArrowBack />
			</span>
			<span
				className='absolute right-0 top-1/2 -scale-x-100 text-3xl rounded-full bg-primary/30 hover:bg-primary p-2 cursor-pointer z-10'
				onClick={slideToNextItem}>
				<BiArrowBack />
			</span>
		</div>
	);
};

export default Carousel;
