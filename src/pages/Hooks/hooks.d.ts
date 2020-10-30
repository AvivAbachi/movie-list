export interface MoviesHooksT {
	movies: MoviesT;
	queue: MoviesT;
	notQueue: MoviesT;
	filter: FilterT;
	status: StatusT;
	getNewMovies: () => Promise<void>;
	setQueue: (movie: MovieT) => void;
	setLike: (movie: MovieT) => void;
	setFilter: (filter: FilterT) => void;
	setStatus: (status: StatusT) => void;
}

export type FilterT = 'All' | 'IN_QUEUE' | 'NOT_IN_QUEUE';
export type StatusT = 'ERROR' | 'SUCCESS' | 'FETCH' | undefined;
