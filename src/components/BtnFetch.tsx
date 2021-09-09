import { memo } from 'react';
import { BtnFetchProps } from './index.d';
import { Btn, Icons } from '.';

const BtnFetch = ({ onClick, status }: BtnFetchProps) => {
	return (
		<Btn onClick={onClick} disabled={status === 'FETCH'} className='btn-fetch' lg>
			{status === 'FETCH' && <Icons.Loading />}
			{status === 'FETCH' ? 'Please Wait...' : status === 'ERROR' ? 'Try Again!' : 'Get New Movies'}
		</Btn>
	);
};

export default memo(BtnFetch);
