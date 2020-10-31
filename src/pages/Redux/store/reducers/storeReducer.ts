import distinctArray from '../../../../lib/distinctArray';
import { GET_NEW_MOVIES, SET_LIKE, SET_QUEUE, SET_STATUS } from '../constants/actionTypes';
import { ERROR, SUCCESS } from '../constants/statusTypes';
import { ActionT, ReduxStoreT, StatusT } from '../redux';

const initialState: ReduxStoreT = {
	page: 1,
	movies: [] as MoviesT,
	status: undefined as StatusT,
};
const storeReducer = (state = initialState, action: ActionT): ReduxStoreT => {
	switch (action.type) {
		case GET_NEW_MOVIES: {
			if (action.status === SUCCESS) {
				const movies = distinctArray(action.payload, state.movies);
				return { page: state.page + 1, movies, status: SUCCESS };
			} else {
				return { ...state, status: ERROR };
			}
		}
		case SET_QUEUE: {
			return {
				...state,
				movies: state.movies.map((pMovie) => {
					return pMovie.id === action.payload.id ? { ...pMovie, isQueue: !pMovie.isQueue } : pMovie;
				}),
			};
		}
		case SET_LIKE: {
			return {
				...state,
				movies: state.movies.map((pMovie) => {
					return pMovie.id === action.payload.id ? { ...pMovie, like: !pMovie.like } : pMovie;
				}),
			};
		}
		case SET_STATUS: {
			return { ...state, status: action.payload };
		}
		default:
			return state;
	}
};
export default storeReducer;
