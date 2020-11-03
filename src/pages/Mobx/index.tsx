import React, { FC, useContext, useRef } from 'react';
import { ObserverCard, ObserverList, Page, Radio, RadioGroup } from '../../components';
import { observer } from 'mobx-react-lite';
import { MobxContext } from './store';
import { CardProps } from '../../components/index.d';
import BtnFetch from '../../components/BtnFetch';

const MobxCard: FC<CardProps> = observer(function MobxCard({ movie }) {
	const { setLike, setQueue } = useContext(MobxContext);
	return <ObserverCard movie={movie} onLike={() => setLike(movie)} onQueue={() => setQueue(movie)} />;
});

const MobxList = observer(function Queue() {
	const { movies, queue, filter } = useContext(MobxContext);
	return (
		<ObserverList>
			{filter === 'All' && movies.map((movie) => <MobxCard key={movie.id} movie={movie} />)}
			{filter === 'IN_QUEUE' && queue.map((movie) => <MobxCard key={movie.id} movie={movie} />)}
		</ObserverList>
	);
});

const Mobx = () => {
	const { getNewMovies, filter, setFilter, status } = useContext(MobxContext);
	const all = useRef(() => setFilter('All'));
	const inQueue = useRef(() => setFilter('IN_QUEUE'));
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={filter === 'All'} changed={all.current} />
				<Radio label='Queue List' isSelected={filter === 'IN_QUEUE'} changed={inQueue.current} />
			</RadioGroup>
			<BtnFetch onClick={getNewMovies} status={status} />
			<MobxList />
		</Page>
	);
};

export default observer(Mobx);
