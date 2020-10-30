import React, { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarProps } from './index.d';

const NavBar: FC<NavBarProps> = ({ children, title, whitLocation, prefixLocation }) => {
	const Location = () => {
		const { pathname } = useLocation();
		return pathname === '/' ? '' : pathname.replace(/\//, prefixLocation ?? ' ');
	};
	return (
		<nav className='navbar'>
			{title && (
				<h1 className='navbar__title '>
					{title}
					{whitLocation && Location()}
				</h1>
			)}
			{children && <ul className='nav_menu'>{children}</ul>}
		</nav>
	);
};
export default memo(NavBar);
