import React, { memo, useCallback, useContext, useRef } from 'react';
import { BtnFetch, Card, List, Page, Radio, RadioGroup, Toolbar } from '../../components';
import { CardProps } from '../../components/index.d';
import { HooksContext } from './useMovies';

const HooksCard = memo<CardProps>(function HooksCard({ movie }) {
	const context = useContext(HooksContext);
	if (context) {
		const setLike = useCallback(() => context.setLike(movie), [context, movie.like]);
		const setQueue = useCallback(() => context.setQueue(movie), [context, movie.isQueue]);
		return <Card key={movie.id} movie={movie} onLike={setLike} onQueue={setQueue} />;
	}
	return null;
});

const HookList = memo(function HookList() {
	const context = useContext(HooksContext);
	if (context) {
		return (
			<List>
				{context.filter === 'All' && context.movies.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
				{context.filter === 'IN_QUEUE' && context.queue.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
			</List>
		);
	}
	return null;
});

const Hooks = () => {
	const context = useContext(HooksContext);
	if (context) {
		const all = useRef(() => context.setFilter('All'));
		const inQueue = useRef(() => context.setFilter('IN_QUEUE'));
		return (
			<Page>
				<Toolbar>
					<RadioGroup>
						<Radio label='Movies List' isSelected={context.filter === 'All'} changed={all.current} />
						<Radio label='Queue List' isSelected={context.filter === 'IN_QUEUE'} changed={inQueue.current} />
					</RadioGroup>
					<BtnFetch onClick={context.getNewMovies} status={context.status} />
				</Toolbar>
				<HookList />
			</Page>
		);
	}
	return null;
};

export default memo(Hooks);
