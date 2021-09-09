import { memo, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const canUseDevTools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const devTools = canUseDevTools && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

export const store = createStore(rootReducer, devTools);

const ReduxProvider = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default memo(ReduxProvider);
