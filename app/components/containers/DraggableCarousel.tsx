'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	carousel_items: ReactNode[];
};

const DraggableCarousel = ({ carousel_items }: Props) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [carouselWidth, setcarouselWidth] = useState(0);

	useEffect(() => {
		if (!carouselRef.current) return;
		setcarouselWidth(
			carouselRef.current.scrollWidth -
				carouselRef.current.offsetWidth
		);
	}, []);

	return (
		<motion.div
			ref={carouselRef}
			className='carousel overflow-hidden'>
			<motion.div
				className='inner-carousel flex gap-4  cursor-grab '
				drag={'x'}
				dragConstraints={{ right: 0, left: -carouselWidth }}
				whileTap={{ cursor: 'grabbing' }}>
				{carousel_items.map((carousel_item) => (
					<motion.div
						key={uuidv4()}
						className='item w-fit h-fit shrink-0 '>
						{carousel_item}
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default DraggableCarousel;
