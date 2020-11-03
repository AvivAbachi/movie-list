import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { LinkImgProp } from './index.d';
const LinkImg: FC<LinkImgProp> = ({ title, className, titleClassName, to, img, Icon, alt }) => {
	return (
		<Link to={to ?? '/'} className={`LinkImg ${className ?? ''}`}>
			{img && <img src={img} alt={alt} />}
			{Icon && <Icon />}
			<p className={titleClassName}>{title}</p>
		</Link>
	);
};

export default memo(LinkImg);
