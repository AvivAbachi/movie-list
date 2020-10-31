import React, { FC, memo } from 'react';
// import { motion } from 'framer-motion';
// import { fade } from '../lib/animation';
import { PageProps } from './index.d';

const Page: FC<PageProps> = ({ children, className }) => {
	return (
		<div
			className={`page ${className ?? ''}`}
			// initial={'initial'} animate={'in'} exit={'out'} variants={fade}
		>
			{children}
		</div>
	);
};

export default memo(Page);
