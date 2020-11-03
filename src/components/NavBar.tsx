import React, { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarProps } from './index.d';

const NavBar: FC<NavBarProps> = ({ children, title, whitLocation, prefixLocation }) => {
	const { pathname } = useLocation();
	const classColor = pathname === '/hooks' ? ' hooks' : pathname === '/mobx' ? ' mobx' : pathname === '/redux' ? ' redux' : '';

	const Location = () => {
		const path = pathname === '/' ? '' : pathname.replace(/\//g, prefixLocation ?? ' ');
		return path;
	};
	return (
		<nav className='navbar'>
			{title && (
				<h1 className={`navbar__title${classColor}`}>
					<Link to='/'>
						{title}
						{whitLocation && Location()}
					</Link>
				</h1>
			)}
			{children && <ul className='nav_menu'>{children}</ul>}
		</nav>
	);
};
export default memo(NavBar);
