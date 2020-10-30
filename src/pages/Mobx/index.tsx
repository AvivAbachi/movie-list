import React, { FC, useContext } from 'react';
import { Btn, ObserverCard, ObserverList, Page, Radio, RadioGroup } from '../../components';
import { observer } from 'mobx-react-lite';
import { MobxContext } from './store';
import { CardProps } from '../../components/index.d';

const MobxCard: FC<CardProps> = observer(function MobxCard({ movie }) {
	const { setLike, setQueue } = useContext(MobxContext);
	return <ObserverCard movie={movie} onLike={() => setLike(movie)} onQueue={() => setQueue(movie)} />;
});

const MobxList = observer(function Queue() {
	const { movies, queue, notQueue, filter } = useContext(MobxContext);
	const list: MoviesT = filter === 'All' ? movies : filter === 'IN_QUEUE' ? queue : filter === 'NOT_IN_QUEUE' ? notQueue : [];
	return (
		<ObserverList>
			{list.map((movie) => (
				<MobxCard key={movie.id} movie={movie} />
			))}
		</ObserverList>
	);
});

const Mobx = () => {
	const { getNewMovies, filter, setFilter, status } = useContext(MobxContext);
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={filter === 'All'} changed={() => setFilter('All')} />
				<Radio label='Queue List' isSelected={filter === 'IN_QUEUE'} changed={() => setFilter('IN_QUEUE')} />
				<Radio label='Not in Queue' isSelected={filter === 'NOT_IN_QUEUE'} changed={() => setFilter('NOT_IN_QUEUE')} />
			</RadioGroup>
			<Btn onClick={getNewMovies} large>
				{status === 'FETCH' ? 'Please Wait...' : status === 'ERROR' ? 'Try Again!' : 'Get New Movies'}
			</Btn>
			<MobxList />
		</Page>
	);
};

export default observer(Mobx);
