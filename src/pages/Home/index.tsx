import React, { memo } from 'react';
import { Page } from '../../components';
import LogoLink from '../../components/LogoLink';

import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import MobxIcon from '../../assets/icons/mobx.png';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';

const Home = () => {
	return (
		<Page className='home'>
			<LogoLink to='/hooks' title='Hooks' titleClassName='hooks' Icon={ReactIcon} />
			<LogoLink to='/mobx' title='Mobx' titleClassName='mobx' img={MobxIcon} />
			<LogoLink to='/redux' title='Redux' titleClassName='redux' Icon={ReduxIcon} />
		</Page>
	);
};

export default memo(Home);
