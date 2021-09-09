import { memo, ReactNode } from 'react';

const RadioGroup = ({ children }: { children: ReactNode }) => {
	return <div className='radio_group'>{children}</div>;
};

export default memo(RadioGroup);
