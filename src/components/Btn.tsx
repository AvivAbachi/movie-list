// import { motion } from 'framer-motion';
import { createElement, FC, memo, useRef } from 'react';
import { BtnProps } from './index.d';

const Btn: FC<BtnProps> = (props) => {
	const Tag = useRef(props.onClick ? 'button' : 'div');
	const btnColor = useRef(
		`${props.color === 'purple' ? ' btn-purple' : props.color === 'red' ? ' btn-red' : props.color === 'green' ? ' btn-green' : ''}`
	);

	const btnClass = 'btn' + btnColor.current + (props.lg ? ' btn-lg' : '') + (props.className ? ` ${props.className}` : '');
	return createElement(Tag.current, { ...props, className: btnClass, onClick: props.onClick, lg: undefined }, props.children);
};
export default memo(Btn);
