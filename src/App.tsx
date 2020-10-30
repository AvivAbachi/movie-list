import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HooksProvider from './pages/Hooks/useMovies';
import MobxProvider from './pages/Mobx/store';
import ReduxProvider from './pages/Redux/store';

import AppRoutes from './App.Routes';
import { NavBar, NavBtn } from './components';

const App = () => {
	return (
		<HooksProvider>
			<MobxProvider>
				<ReduxProvider>
					<Router>
						<NavBar title={'Movie List'} whitLocation prefixLocation=' - '>
							<NavBtn to='/' label='Hooks' />
							<NavBtn to='/mobx' label='Mobx' />
							<NavBtn to='/redux' label='Redux' />
						</NavBar>
						<AppRoutes />
					</Router>
				</ReduxProvider>
			</MobxProvider>
		</HooksProvider>
	);
};

export default memo(App);
