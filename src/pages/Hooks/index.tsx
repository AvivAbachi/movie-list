import React, { memo, useCallback, useContext, useRef } from 'react';
import { CardProps } from '../../components/index.d';
import { Card, List, Page, Radio, RadioGroup } from '../../components';
import { HooksContext } from './useMovies';
import BtnFetch from '../../components/BtnFetch';
import Toolbar from '../../components/Toolbar';

const HooksCard = memo<CardProps>(function HooksCard({ movie }) {
	const context = useContext(HooksContext);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const setLike = useCallback(() => context?.setLike(movie), [context?.setLike, movie.like]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const setQueue = useCallback(() => context?.setQueue(movie), [context?.setQueue, movie.isQueue]);
	return <Card key={movie.id} movie={movie} onLike={setLike} onQueue={setQueue} />;
});

const HookList = memo(function HookList() {
	const context = useContext(HooksContext);
	return (
		<List>
			{context?.filter === 'All' && context.movies.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
			{context?.filter === 'IN_QUEUE' && context.queue.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
		</List>
	);
});

const Hooks = () => {
	const context = useContext(HooksContext);
	const all = useRef(() => context?.setFilter('All'));
	const inQueue = useRef(() => context?.setFilter('IN_QUEUE'));
	return (
		<Page className='max-h-full'>
			<Toolbar>
				<RadioGroup>
					<Radio label='Movies List' isSelected={context?.filter === 'All'} changed={all.current} />
					<Radio label='Queue List' isSelected={context?.filter === 'IN_QUEUE'} changed={inQueue.current} />
				</RadioGroup>
				<BtnFetch onClick={context?.getNewMovies} status={context?.status} />
			</Toolbar>
			<HookList />
		</Page>
	);
};

export default memo(Hooks);
