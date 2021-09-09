import { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './App.Routes';
import { NavBar, NavBtn } from './components';

import HooksProvider from './pages/Hooks/useMovies';
import MobxProvider from './pages/Mobx/store';
import ReduxProvider from './pages/Redux/store';

const App = () => {
	return (
		<HooksProvider>
			<MobxProvider>
				<ReduxProvider>
					<Router>
						<div className='app'>
							<NavBar title={'Movie List'} whitLocation prefixLocation=' - '>
								<NavBtn to='/hooks' label='Hooks' colors='hooks' />
								<NavBtn to='/mobx' label='Mobx' colors='mobx' />
								<NavBtn to='/redux' label='Redux' colors='redux' />
							</NavBar>
							<AppRoutes />
						</div>
					</Router>
				</ReduxProvider>
			</MobxProvider>
		</HooksProvider>
	);
};

export default memo(App);
