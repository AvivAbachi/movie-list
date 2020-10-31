import storeReducer from './reducers/storeReducer';
import filterReducer from './reducers/filterReducer';
import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
	store: storeReducer,
	filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
