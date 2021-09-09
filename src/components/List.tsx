import { memo, ReactChild, ReactNode, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Empty from './Empty';

const List = ({ children }: { children: ReactNode }) => {
	const isEmpty = children?.length == 0;
	return (
		<AnimateSharedLayout>
			<motion.div className='list' layout>
				<AnimatePresence presenceAffectsLayout>{isEmpty ? <Empty /> : children}</AnimatePresence>
			</motion.div>
		</AnimateSharedLayout>
	);
};

export default memo(List);
export const ObserverList = observer(List);
