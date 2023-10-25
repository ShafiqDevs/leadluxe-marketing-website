'use client';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavMobileMenuToggle from '../ui/NavMobileMenuToggle';
import { v4 as uuidv4 } from 'uuid';
import NavLink from '../ui/NavLink';
import ThemeToggle from '../ui/ThemeToggle';

type Props = {
	brandIcon?: ReactNode;
	navLinks: { text: string; href: string }[];
};

const MobileNavbar = ({ brandIcon, navLinks }: Props) => {
	const [isMenuOpen, setisMenuOpen] = useState(false);

	function toggleMenu() {
		setisMenuOpen((prev) => !prev);
	}

	return (
		<nav
			className={`md:hidden flex flex-col justify-center items-center gap-4 w-full h-fit main-padding-x py-3 bg-background border-b border-white/30`}>
			<div className='flex w-full h-fit justify-end items-center'>
				{brandIcon && (
					<Link
						href={`/`}
						id='#'
						className='flex justify-center items-center w-fit h-fit mr-auto'>
						{brandIcon}
					</Link>
				)}
				<div className='flex items-center gap-3'>
					<span className='rounded-full text-2xl'>
						<ThemeToggle />
					</span>
					<span className='text-4xl text-text'>
						<NavMobileMenuToggle
							openIcon={<AiOutlineMenu />}
							closeIcon={<AiOutlineClose />}
							isOpen={isMenuOpen}
							menuToggle={toggleMenu}
						/>
					</span>
				</div>
			</div>
			{/* nav links container */}
			<ul
				className={`${
					isMenuOpen ? 'flex h-fit' : 'hidden'
				} flex-col justify-start items-start w-full`}>
				{navLinks.map((item) => (
					<NavLink
						key={uuidv4()}
						text={item.text}
						href={item.href}
					/>
				))}
			</ul>
		</nav>
	);
};

export default MobileNavbar;
