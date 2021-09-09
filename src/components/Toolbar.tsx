import { memo, ReactNode } from 'react';

const Toolbar = ({ children }: { children: ReactNode }) => {
	return <div className='toolbar'>{children}</div>;
};

export default memo(Toolbar);
