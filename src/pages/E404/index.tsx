import React, { FC, memo, useState } from 'react';

import { Redirect } from 'react-router-dom';
import Btn from '../../components/Btn';
import Page from '../../components/Page';

const E404: FC = () => {
	const [redirect, setRedirect] = useState<boolean>(false);
	return (
		<Page>
			<div className='e404'>
				<h2 className='e404__title'>404</h2>
				<h3 className='e404__subtitle'>{`Sorry we couldn't find this page.`}</h3>
				<p className='e404__paragraph'>{`But don't worry, you can back homepage.`}</p>
				<Btn onClick={() => setRedirect(true)} lg>
					Back to Home Page
				</Btn>
				{redirect && <Redirect to='/' />}
			</div>
		</Page>
	);
};

export default memo(E404);
