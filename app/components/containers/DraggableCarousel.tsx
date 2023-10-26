'use client';

import React, {
	Fragment,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
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
				className='inner-carousel flex justify-between gap-4 w-full h-full cursor-grab'
				drag={'x'}
				dragConstraints={{ right: 0, left: -carouselWidth }}
				whileTap={{ cursor: 'grabbing' }}>
				{carousel_items.map((carousel_item) => (
					<Fragment key={uuidv4()}>{carousel_item}</Fragment>
				))}
			</motion.div>
		</motion.div>
	);
};

export default DraggableCarousel;
