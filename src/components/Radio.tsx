import { memo } from 'react';
import { RadioProps } from './index.d';

const Radio = ({ id, changed, value, isSelected, label }: RadioProps) => {
	return (
		<label className={`radio ${isSelected ? 'radio-active' : ''}`}>
			<input className='radio__input' id={id} onChange={changed} value={value} type='radio' checked={isSelected} />
			{label}
		</label>
	);
};

export default memo(Radio);
