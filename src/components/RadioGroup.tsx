import React, { FC, memo } from 'react';

const RadioGroup: FC<ChildrenProps> = ({ children }) => {
	return <div className='radio_group'>{children}</div>;
};

export default memo(RadioGroup);
