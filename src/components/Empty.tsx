import React, { motion } from 'framer-motion';
import { fade } from '../lib/animation';

export const Empty = () => {
	return (
		<motion.div
			className='text-4xl font-bold justify-center text-gray-700 text-opacity-50 h-full
          flex items-center py-16'
			initial={'initial'}
			animate={'in'}
			exit={'out'}
			variants={fade}>
			No Movies
		</motion.div>
	);
};
