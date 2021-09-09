import { memo } from 'react';

const Empty = () => (
	<div className='text-4xl font-bold justify-center text-gray-700 text-opacity-50 w-full flex items-center pt-20'>No Movies</div>
);

export default memo(Empty);
