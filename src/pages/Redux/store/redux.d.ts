import { GET_NEW_MOVIES, SET_FILTER, SET_LIKE, SET_QUEUE, SET_STATUS } from './constants/actionTypes';
import { ALL, IN_QUEUE, NOT_IN_QUEUE } from './constants/filterTypes';
import { ERROR, FETCH, SUCCESS } from './constants/statusTypes';

export interface SetLikeAction {
	type: typeof SET_LIKE;
	payload: MovieT;
}

export interface AddQueueAction {
	type: typeof SET_QUEUE;
	payload: MovieT;
}

export interface setStatusAction {
	type: typeof SET_STATUS;
	payload: StatusT;
}

interface GetNewMoviesSuccess {
	type: typeof GET_NEW_MOVIES;
	payload: MoviesT;
	status: typeof SUCCESS;
}

interface GetNewMoviesError {
	type: typeof GET_NEW_MOVIES;
	status: typeof ERROR;
}

export type GetNewMoviesAction = GetNewMoviesSuccess | GetNewMoviesError;

export interface setMoviesFilter {
	type: typeof SET_FILTER;
	payload: FilterT;
}

export type ActionT = SetLikeAction | AddQueueAction | GetNewMoviesAction | setStatusAction;
export type FilterT = typeof ALL | typeof IN_QUEUE | typeof NOT_IN_QUEUE;
export type StatusT = typeof ERROR | typeof SUCCESS | typeof FETCH | undefined;
export type ReduxStoreT = {
	page: number;
	movies: MoviesT;
	status: StatusT;
};
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
