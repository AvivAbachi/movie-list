import React, { FC, memo } from 'react';
import { observer } from 'mobx-react-lite';
// import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const List: FC<ChildrenProps> = ({ children }) => {
	return (
		// <AnimateSharedLayout>
		<div className='list'>
			{/* <AnimatePresence presenceAffectsLayout> */}
			{children}
			{/* </AnimatePresence> */}
		</div>
		// </AnimateSharedLayout>
	);
};

export default memo(List);
export const ObserverList = observer(List);
