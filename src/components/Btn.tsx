import { motion } from 'framer-motion';
import { createElement, FC, memo, useRef } from 'react';
import { BtnProps } from './index.d';

const Btn: FC<BtnProps> = ({ onClick, children, className, color, large, disabled }) => {
	const Tag = useRef(onClick ? motion.button : 'div');
	const btnColor = useRef(`btn${color === 'purple' ? ' btn-purple' : color === 'red' ? ' btn-red' : color === 'green' ? ' btn-green' : ''}`);
	const attrs = useRef(
		onClick
			? {
					disabled: disabled,
					onClick: onClick,
					className: btnColor.current + (large ? ' btn-lg' : '') + (className ? ` ${className}` : ''),
					whileHover: { scale: 1.15 },
					whileTap: { scale: 0.95 },
					transition: { type: 'spring', velocity: 5, stiffness: 500 },
			  }
			: {
					disabled: disabled,
					className: btnColor.current + (large ? ' btn-lg' : '') + (className ? ` ${className}` : ''),
			  }
	);

	return createElement(Tag.current, attrs.current, children);
};
export default memo(Btn);
