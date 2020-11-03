import React, { FC, memo } from 'react';
import { BtnFetchProps } from './index.d';
import { Btn } from '.';
import { ReactComponent as Loading } from '../assets/icons/loading.svg';

const BtnFetch: FC<BtnFetchProps> = ({ onClick, status }: any) => {
	return (
		<Btn onClick={onClick} disabled={status === 'FETCH'} className='btn-fetch' lg>
			{status === 'FETCH' && <Loading className='loading' />}
			{status === 'FETCH' ? 'Please Wait...' : status === 'ERROR' ? 'Try Again!' : 'Get New Movies'}
		</Btn>
	);
};

export default memo(BtnFetch);
