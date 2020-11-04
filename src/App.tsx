import React, { FC, memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './App.Routes';
import { NavBar, NavBtn } from './components';
import './styles.css';

import HooksProvider from './pages/Hooks/useMovies';
import MobxProvider from './pages/Mobx/store';
import ReduxProvider from './pages/Redux/store';

const App: FC = () => {
	return (
		<HooksProvider>
			<MobxProvider>
				<ReduxProvider>
					<Router>
						<div className='app'>
							<NavBar title={'Movie List'} whitLocation prefixLocation=' - '>
								<NavBtn to='/hooks' label='Hooks' className='hooks' />
								<NavBtn to='/mobx' label='Mobx' className='mobx' />
								<NavBtn to='/redux' label='Redux' className='redux' />
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
