import { memo } from 'react';
import { Link } from 'react-router-dom';
import { NavBtnProps } from './index.d';

const NavBtn = ({ to = '/', label, className, colors }: NavBtnProps) => {
	return (
		<li className={`nav_btn ${className || ''}`}>
			<Link to={to} className={`nav_btn__link ${colors}`}>
				{label}
			</Link>
		</li>
	);
};

export default memo(NavBtn);
