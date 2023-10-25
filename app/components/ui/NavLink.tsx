'use client';
import Link from 'next/link';
import {} from 'react';
import { usePathname } from 'next/navigation';

type Props = {
	text: string;
	href: string;
};

const NavLink = ({ text, href }: Props) => {
	return (
		<Link
			href={href}
			className={`${
				usePathname() === href && 'bg-primary'
			} text-text p-2 w-full md:w-fit text-base md:text-xl hover:bg-primary/30 rounded-md  transition-all duration-200 `}>
			{text}
		</Link>
	);
};

export default NavLink;
