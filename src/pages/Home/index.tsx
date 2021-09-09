import { memo } from 'react';
import { Page, LogoLink, Icons } from '../../components';
import Mobx from '../../assets/mobx.png';

const Home = () => {
	return (
		<Page home>
			<LogoLink to='/hooks' title='Hooks' titleClassName='hooks' Icon={Icons._React} />
			<LogoLink to='/mobx' title='Mobx' titleClassName='mobx' img={Mobx} />
			<LogoLink to='/redux' title='Redux' titleClassName='redux' Icon={Icons.Redux} />
		</Page>
	);
};

export default memo(Home);
