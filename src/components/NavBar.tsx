import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarProps } from './index.d';

const NavBar = ({ children, title, whitLocation, prefixLocation }: NavBarProps) => {
	const { pathname } = useLocation();
	const classColor =
		pathname === '/hooks' ? ' text-hooks' : pathname === '/mobx' ? ' text-mobx' : pathname === '/redux' ? ' text-redux' : '';

	const Location = () => {
		return pathname === '/' ? '' : pathname.replace(/\//g, prefixLocation || ' ');
	};
	return (
		<nav className='navbar'>
			{title && (
				<Link to='/' className={`navbar__title${classColor}`}>
					<h1>
						{title}
						{whitLocation && Location()}
					</h1>
				</Link>
			)}
			{children && <ul className='nav_menu'>{children}</ul>}
		</nav>
	);
};
export default memo(NavBar);
