import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { NavBtnProps } from './index.d';

const NavBtn: FC<NavBtnProps> = ({ to = '/', label }) => {
	return (
		<li className='nav_btn'>
			<Link to={to} className='nav_btn__link'>
				{label}
			</Link>
		</li>
	);
};

export default memo(NavBtn);
