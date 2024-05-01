import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { v4 as uuidv4 } from 'uuid';
import NavLink from '../ui/NavLink';

type Props = {
	brandIcon?: ReactNode;
	mobileNavbar?: ReactNode;
	navLinks?: { text: string; href: string; scroll?: boolean }[];
};

const Navbar = ({ brandIcon, mobileNavbar, navLinks }: Props) => {
	return (
		<nav
			className={`flex flex-col justify-center items-center w-full h-fit main-padding-x py-3 bg-background border-b border-black/30 dark:border-white/30`}>
			<div className='flex w-fit h-fit justify-center items-center'>
				{brandIcon && (
					<Link
						href={`/`}
						id='#'
						className='flex justify-center items-center w-full h-fit mr-auto'>
						{brandIcon}
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
