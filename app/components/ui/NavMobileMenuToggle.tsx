'use client';
import { useState } from 'react';

type Props = {
	openIcon: React.ReactElement;
	closeIcon: React.ReactElement;
	isOpen: boolean;
	menuToggle: () => void;
};

const NavMobileMenuToggle = ({
	menuToggle,
	isOpen,
	openIcon,
	closeIcon,
}: Props) => {
	function toggleMenu() {
		menuToggle();
	}

	return (
		<button
			className='flex flex-col justify-start items-start w-full h-fit text-text'
			onClick={toggleMenu}>
			{isOpen ? closeIcon : openIcon}
		</button>
	);
};

export default NavMobileMenuToggle;
