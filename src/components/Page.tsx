import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { PageProps } from './index.d';

const Page: FC<PageProps> = ({ children, className }) => {
	return (
		<motion.div className={`page ${className ?? ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
};

export default memo(Page);
