import React, { memo } from 'react';
import { Page } from '../../components';

import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';
import MobxIcon from '../../assets/icons/mobx.png';
import LinkImg from '../../components/LinkImg';

const Home = () => {
	return (
		<Page>
			<div className='home container'>
				<LinkImg to='/hooks' title='Hooks' titleClassName='hooks' Icon={ReactIcon} />
				<LinkImg to='/mobx' title='Mobx' titleClassName='mobx' img={MobxIcon} />
				<LinkImg to='/redux' title='Redux' titleClassName='redux' Icon={ReduxIcon} />
			</div>
		</Page>
	);
};

export default memo(Home);
