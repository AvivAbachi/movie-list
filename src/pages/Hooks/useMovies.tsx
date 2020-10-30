import React, { createContext, FC, memo, useRef, useState } from 'react';
import { fetchMovies } from '../../lib/fetchMovies';
import { FilterT, MoviesHooksT, StatusT } from './hooks';
import distinctArray from '../../lib/distinctArray';
import { mov } from '../../lib/simpleData';

const useMovies = (): MoviesHooksT => {
	const [movies, setMovies] = useState<MoviesT>(mov);
	const [filter, setStateFilter] = useState<FilterT>('All');
	const [status, setStateStatus] = useState<StatusT>('SUCCESS');
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
			const idx = movies.indexOf(movie);
			movies[idx].isQueue = !movies[idx].isQueue;
			return movies;
			// movies.map((prevMovie: MovieT) => {
			// 	return prevMovie.id === movie.id ? { ...prevMovie, isQueue: !movie.isQueue } : prevMovie;
			// })
		});
	};
	const _setLike = (movie: MovieT) => {
		setMovies((movies) => {
			const idx = movies.indexOf(movie);
			movies[idx].like = !movies[idx].like;
			return movies;
			// 	movies.map((prevMovie: MovieT) => {
			// 		return prevMovie.id === movie.id ? { ...prevMovie, like: !movie.like } : prevMovie;
			// 	})
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

export const HooksContext = createContext<MoviesHooksT>({} as MoviesHooksT);

const HooksProvider: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
	const hooks = useMovies();
	return <HooksContext.Provider value={hooks}>{children}</HooksContext.Provider>;
};

export default memo(HooksProvider);
