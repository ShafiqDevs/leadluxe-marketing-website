import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { v4 as uuidv4 } from 'uuid';
import NavLink from '../ui/NavLink';

type Props = {
	brandIcon?: ReactNode;
	mobileNavbar?: ReactNode;
	navLinks: { text: string; href: string }[];
};

const Navbar = ({ brandIcon, mobileNavbar, navLinks }: Props) => {
	return (
		<>
			{/* mobile nav */}
			{mobileNavbar}

			{/* desktop nav */}
			<nav
				className={`hidden md:flex justify-end items-center w-full h-fit main-padding-x py-3 bg-background border-b border-black/30 dark:border-white/30`}>
				<div className='flex w-fit h-fit justify-end items-center'>
					{brandIcon && (
						<Link
							href={`/`}
							id='#'
							className='flex justify-center items-center w-full h-fit mr-auto'>
							{brandIcon}
						</Link>
					)}
				</div>
				{/* nav links container */}
				<ul className={`flex justify-end items-center w-full h-fit gap-4`}>
					{navLinks.map((item) => (
						<NavLink
							key={uuidv4()}
							text={item.text}
							href={item.href}
						/>
					))}
					<li className='rounded-full text-2xl'>
						<ThemeToggle />
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
