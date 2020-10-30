import React, { memo, useContext } from 'react';
import { Btn, Card, List, Page, Radio, RadioGroup } from '../../components';
import { HooksContext } from './useMovies';

const HookList = memo(function HookList() {
	const context = useContext(HooksContext);
	// const { movies, queue, notQueue, setLike, setQueue, filter }=context
	const list: MoviesT =
		context?.filter === 'All'
			? context?.movies
			: context?.filter === 'IN_QUEUE'
			? context?.queue
			: context?.filter === 'NOT_IN_QUEUE'
			? context?.notQueue
			: [];

	return (
		<List>
			{list.map((movie) => (
				<Card key={movie.id} movie={movie} onLike={() => context?.setLike(movie)} onQueue={() => context?.setQueue(movie)} />
			))}
		</List>
	);
});

const Hooks = () => {
	const context = useContext(HooksContext);
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={context?.filter === 'All'} changed={() => context?.setFilter('All')} />
				<Radio label='Queue List' isSelected={context?.filter === 'IN_QUEUE'} changed={() => context?.setFilter('IN_QUEUE')} />
				<Radio label='Not in Queue' isSelected={context?.filter === 'NOT_IN_QUEUE'} changed={() => context?.setFilter('NOT_IN_QUEUE')} />
			</RadioGroup>
			<Btn onClick={context?.getNewMovies} large>
				{context?.status === 'FETCH' ? 'Please Wait...' : context?.status === 'ERROR' ? 'Try Again!' : 'Get New Movies'}
			</Btn>
			<HookList />
		</Page>
	);
};

export default memo(Hooks);
