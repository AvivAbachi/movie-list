import React, { memo, useContext, useRef } from 'react';
import { CardProps } from '../../components/index.d';
import { Btn, Card, List, Page, Radio, RadioGroup } from '../../components';
import { HooksContext } from './useMovies';

const HooksCard = memo<CardProps>(function HooksCard({ movie }) {
	const context = useContext(HooksContext);
	return <Card key={movie.id} movie={movie} onLike={() => context?.setLike(movie)} onQueue={() => context?.setQueue(movie)} />;
});

const HookList = memo(function HookList() {
	const context = useContext(HooksContext);
	return (
		<List>
			{context?.filter === 'All' && context.movies.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
			{context?.filter === 'IN_QUEUE' && context.queue.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
			{context?.filter === 'NOT_IN_QUEUE' && context.notQueue.map((movie) => <HooksCard key={movie.id} movie={movie} />)}
		</List>
	);
});

const Hooks = () => {
	const context = useContext(HooksContext);
	const all = useRef(() => context?.setFilter('All'));
	const inQueue = useRef(() => context?.setFilter('IN_QUEUE'));
	const notInQueue = useRef(() => context?.setFilter('NOT_IN_QUEUE'));
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={context?.filter === 'All'} changed={all.current} />
				<Radio label='Queue List' isSelected={context?.filter === 'IN_QUEUE'} changed={inQueue.current} />
				<Radio label='Not in Queue' isSelected={context?.filter === 'NOT_IN_QUEUE'} changed={notInQueue.current} />
			</RadioGroup>
			<Btn onClick={context?.getNewMovies} lg>
				{context?.status === 'FETCH' ? 'Please Wait...' : context?.status === 'ERROR' ? 'Try Again!' : 'Get New Movies'}
			</Btn>
			<HookList />
		</Page>
	);
};

export default memo(Hooks);
