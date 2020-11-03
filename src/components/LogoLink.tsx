import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { LogoLinkProp } from './index.d';
const LogoLink: FC<LogoLinkProp> = ({ title, className, titleClassName, to, img, Icon, alt }) => {
	return (
		<Link to={to ?? '/'} className={`logo_link ${className ?? ''}`}>
			{img && <img className='logo_link__logo' src={img} alt={alt} />}
			{Icon && <Icon className='logo_link__logo' />}
			<p className={`logo_link__title ${titleClassName ?? ''}`}>{title}</p>
		</Link>
	);
};

export default memo(LogoLink);
