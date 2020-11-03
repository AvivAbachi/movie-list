import { fetchMovies } from '../../../lib/fetchMovies';
import * as types from './constants/actionTypes';
import { ERROR, FETCH, SUCCESS } from './constants/statusTypes';
import { AddQueueAction, FilterT, GetNewMoviesAction, SetLikeAction, setMoviesFilter, setStatusAction, StatusT } from './redux';
import { store } from '.';

export const getNewMovies = async (): Promise<GetNewMoviesAction> => {
	store.dispatch({ type: types.SET_STATUS, payload: FETCH });
	const page = store.getState().store.page;
	const payload = await fetchMovies(page);
	return payload ? { type: types.GET_NEW_MOVIES, status: SUCCESS, payload } : { type: types.GET_NEW_MOVIES, status: ERROR };
};
export const setQueue = (movie: MovieT): AddQueueAction => {
	return { type: types.SET_QUEUE, payload: movie };
};
export const setLike = (movie: MovieT): SetLikeAction => {
	return { type: types.SET_LIKE, payload: movie };
};
export const setFilter = (filter: FilterT): setMoviesFilter => {
	return { type: types.SET_FILTER, payload: filter };
};
export const setStatus = (status: StatusT): setStatusAction => {
	return { type: types.SET_STATUS, payload: status };
};
