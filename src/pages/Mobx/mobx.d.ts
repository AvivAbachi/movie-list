export interface MobxStoreT {
	page: number;
	movies: MoviesT;
	filter: FilterT;
	status: StatusT;
	readonly queue: MovieT[];
	readonly notQueue: MovieT[];
	getNewMovies: () => Promise<void>;
	setQueue: (movie: MovieT) => boolean;
	setLike: (movie: MovieT) => boolean;
	setFilter: (filter: FilterT) => void;
	setStatus: (status: StatusT) => void;
}

export type FilterT = 'All' | 'IN_QUEUE' | 'NOT_IN_QUEUE';
export type StatusT = 'ERROR' | 'SUCCESS' | 'FETCH' | undefined;
