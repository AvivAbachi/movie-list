import * as MOVIES_FILTERS from '../constants/filterTypes';
import { FilterT } from '../redux';

export function selectIsQueue(movies: MoviesT) {
	return movies.filter((todo) => todo.isQueue);
}

export function selectNotIsQueue(movies: MoviesT) {
	return movies.filter((todo) => !todo.isQueue);
}

const movieFilter = (movies: MoviesT = [], filter: FilterT = 'ALL') => {
	switch (filter) {
		case MOVIES_FILTERS.ALL:
			return movies;
		case MOVIES_FILTERS.IN_QUEUE:
			return selectIsQueue(movies);
		case MOVIES_FILTERS.NOT_IN_QUEUE:
			return selectNotIsQueue(movies);
		default:
			return movies;
	}
};
export default movieFilter;
