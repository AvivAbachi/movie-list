import { createContext, memo, ReactNode, useRef, useState } from 'react';
import { FilterT, MoviesHooksT, StatusT } from './hooks';
import fetchMovies from '../../lib/fetchMovies';
import distinctArray from '../../lib/distinctArray';

export const useMovies = (): MoviesHooksT => {
	const [movies, setMovies] = useState<MoviesT>([]);
	const [filter, setStateFilter] = useState<FilterT>('All');
	const [status, setStateStatus] = useState<StatusT>();
	const page = useRef<number>(1);

	const _getNewMovies = async () => {
		setStatus.current('FETCH');
		const res = await fetchMovies(page.current);
		if (res) {
			setStatus.current('SUCCESS');
			setMovies((movies) => distinctArray(res, movies));
			page.current++;
		} else {
			setStatus.current('ERROR');
		}
	};
	const _setQueue = (movie: MovieT) => {
		setMovies((movies) => {
			return movies.map((stateMovie: MovieT) => {
				return stateMovie.id === movie.id ? { ...stateMovie, isQueue: !stateMovie.isQueue } : stateMovie;
			});
		});
	};
	const _setLike = (movie: MovieT) => {
		setMovies((movies) => {
			return movies.map((stateMovie: MovieT) => {
				return stateMovie.id === movie.id ? { ...stateMovie, like: !stateMovie.like } : stateMovie;
			});
		});
	};
	const _setFilter = (filter: FilterT) => {
		setStateFilter(filter);
	};
	const _setStatus = (status: StatusT) => {
		setStateStatus(status);
	};
	const getNewMovies = useRef(_getNewMovies);
	const setQueue = useRef(_setQueue);
	const setLike = useRef(_setLike);
	const setFilter = useRef(_setFilter);
	const setStatus = useRef(_setStatus);

	return {
		movies,
		filter,
		status,
		queue: movies.filter((movie: MovieT) => movie.isQueue),
		notQueue: movies.filter((movie: MovieT) => !movie.isQueue),
		getNewMovies: getNewMovies.current,
		setQueue: setQueue.current,
		setLike: setLike.current,
		setFilter: setFilter.current,
		setStatus: setStatus.current,
	};
};

export const HooksContext = createContext<MoviesHooksT | null>(null);

const HooksProvider = ({ children }: { children: ReactNode }) => {
	const hooks = useMovies();
	return <HooksContext.Provider value={hooks}>{children}</HooksContext.Provider>;
};

export default memo(HooksProvider);
