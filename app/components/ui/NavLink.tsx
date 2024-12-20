'use client';
import Link from 'next/link';
import {} from 'react';
import { usePathname } from 'next/navigation';

type Props = {
	text: string;
	href: string;
	scroll?: boolean;
};

const NavLink = ({ text, href, scroll = true }: Props) => {
	return (
		<Link
			href={href}
			scroll={scroll}
			className={`${
				usePathname() === href && 'bg-primary'
			}  p-2 lg:p-1 lg:px-2 w-full md:w-fit text-base text-text md:text-lg font-light hover:bg-primary/30 rounded-md  transition-all duration-200 `}>
			{text}
		</Link>
	);
};

export default NavLink;
