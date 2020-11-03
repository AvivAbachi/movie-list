import React, { memo } from 'react';

import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Hooks from './pages/Hooks';
import Mobx from './pages/Mobx';
import Redux from './pages/Redux';
// import E404 from './pages/E404';
import Home from './pages/Home';

const Routes = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Switch location={location} key={location.pathname}>
				<Route path='/mobx' component={Mobx} />
				<Route path='/redux' component={Redux} />
				<Route path='/hooks' exact component={Hooks} />
				<Route path='/' exact component={Home} />
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</AnimatePresence>
	);
};

export default memo(Routes);
