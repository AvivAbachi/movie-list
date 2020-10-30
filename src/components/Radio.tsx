import React, { FC, memo } from 'react';
import { RadioProps } from './index.d';

const Radio: FC<RadioProps> = ({ id, changed, value, isSelected, label }) => {
	return (
		<label className={`radio  ${isSelected ? 'radio-active' : ''}`}>
			<input className='radio__input' id={id} onChange={changed} value={value} type='radio' checked={isSelected} />
			{label}
		</label>
	);
};

export default memo(Radio);
