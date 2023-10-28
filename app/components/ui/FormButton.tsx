import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

type Props = {
	href?: string | null;
	className: string;
};

const FormButton = ({ className, href }: Props) => {
	const [enabled, setenabled] = useState(true);

	return href ? (
		<Link
			href={href}
			className={`flex justify-center items-center gap-4 ${className}
			${!enabled ? 'pointer-events-none' : ''}`}
			onClick={() => setenabled(false)}>
			{enabled ? 'submit' : 'form submitted'}
			{!enabled ? (
				<span className='text-lg font-medium text-text transition-all duration-300'>
					<AiFillCheckCircle />
				</span>
			) : (
				''
			)}
		</Link>
	) : (
		<button className={`opacity-30 pointer-events-none ${className}`}>
			Submit
		</button>
	);
};

export default FormButton;
