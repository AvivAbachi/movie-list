import React, { memo } from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

import Hooks from './pages/Hooks';
import Mobx from './pages/Mobx';
import Redux from './pages/Redux';
import E404 from './pages/E404';

const Routes = () => {
	const location = useLocation();
	return (
		// <AnimatePresence exitBeforeEnter initial={false}>
		<Switch location={location} key={location.pathname}>
			<Route path='/mobx' component={Mobx} />
			<Route path='/redux' component={Redux} />
			<Route path='/' exact component={Hooks} />
			<Route path='*' component={E404} />
		</Switch>
		// </AnimatePresence>
	);
};

export default memo(Routes);

/*
<Route path='/' exact>
    <Redirect to='/hooks'/>
</Route> 
*/
