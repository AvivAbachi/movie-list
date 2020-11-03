import React, { FC, memo } from 'react';

const Toolbar: FC<ChildrenProps> = ({ children }) => {
	return <div className='toolbar'>{children}</div>;
};

export default memo(Toolbar);
