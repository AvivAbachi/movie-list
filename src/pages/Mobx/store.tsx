import React, { createContext, FC, useRef } from 'react';
import { action, observable } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { fetchMovies } from '../../lib/fetchMovies';
import { FilterT, MobxStoreT, StatusT } from './mobx';
import distinctArray from '../../lib/distinctArray';

const MobxStore: MobxStoreT = observable({
	page: 1 as number,
	movies: [] as MoviesT,
	filter: 'All' as FilterT,
	status: undefined as StatusT,
	get queue() {
		return this.movies.filter((movie) => movie.isQueue);
	},
	get notQueue() {
		return this.movies.filter((movie) => !movie.isQueue || !movie.isQueue === undefined);
	},
	getNewMovies: action('Get New Movies', async () => {
		MobxStore.setStatus('FETCH');
		const results = await fetchMovies(MobxStore.page);
		if (results) {
			MobxStore.setStatus('SUCCESS');
			MobxStore.movies = distinctArray(results, MobxStore.movies);
			MobxStore.page++;
		} else {
			MobxStore.setStatus('ERROR');
		}
	}),
	setQueue: action('Add Movie to Queue', (movie: MovieT) => (movie.isQueue = !movie.isQueue)),
	setLike: action('Like Movie', (movie: MovieT) => (movie.like = !movie.like)),
	setFilter: action('Set Filter', (filter: FilterT) => (MobxStore.filter = filter)),
	setStatus: action('Set Status', (status: StatusT) => (MobxStore.status = status)),
} as MobxStoreT);

export const MobxContext = createContext<MobxStoreT>(MobxStore);

const MobxProvider: FC<ChildrenProps> = ({ children }) => {
	const mobx = useRef(useLocalObservable(() => MobxStore));
	return <MobxContext.Provider value={mobx.current}>{children}</MobxContext.Provider>;
};

export default observer(MobxProvider);
