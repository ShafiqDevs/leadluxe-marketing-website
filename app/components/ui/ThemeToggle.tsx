'use client';

import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
type Props = {};

const ThemeToggle = (props: Props) => {
	const { resolvedTheme, setTheme } = useTheme();

	const [isMounted, setIsMounted] = useState(false);
	const [enabled, setEnabled] = useState(
		resolvedTheme === 'light' ? false : true
	);

	useEffect(() => setIsMounted(true), []);
	if (!isMounted) {
		return null;
	}

	function switchTheme() {
		setEnabled(resolvedTheme === 'light');
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	}

	return (
		<span
			className='cursor-pointer'
			onClick={switchTheme}>
			{resolvedTheme === 'light' ? (
				<RiMoonClearFill />
			) : (
				<BsFillSunFill />
			)}
		</span>
	);
};

export default ThemeToggle;
