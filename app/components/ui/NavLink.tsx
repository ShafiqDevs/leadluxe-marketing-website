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
			}  p-2 lg:p-1 w-full md:w-fit text-base text-text md:text-lg font-light hover:bg-primary/30 rounded-md  transition-all duration-200 `}>
			{text}
		</Link>
	);
};

export default NavLink;
