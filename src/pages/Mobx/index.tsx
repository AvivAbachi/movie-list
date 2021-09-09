import { useContext, useRef } from 'react';
import { BtnFetch, ObserverCard, ObserverList, Page, Radio, RadioGroup, Toolbar } from '../../components';
import { observer } from 'mobx-react-lite';
import { MobxContext } from './store';
import { CardProps } from '../../components/index.d';

const MobxCard = observer(function MobxCard({ movie }: CardProps) {
	const { setLike, setQueue } = useContext(MobxContext);
	return <ObserverCard movie={movie} onLike={() => setLike(movie)} onQueue={() => setQueue(movie)} />;
});

const MobxList = observer(function Queue() {
	const { movies, queue, filter } = useContext(MobxContext);
	return (
		<ObserverList>
			{filter === 'All'
				? movies.map((movie) => <MobxCard key={movie.id} movie={movie} />)
				: queue.map((movie) => <MobxCard key={movie.id} movie={movie} />)}
		</ObserverList>
	);
});

const Mobx = () => {
	const { getNewMovies, filter, setFilter, status } = useContext(MobxContext);
	const all = useRef(() => setFilter('All'));
	const inQueue = useRef(() => setFilter('IN_QUEUE'));
	return (
		<Page>
			<Toolbar>
				<RadioGroup>
					<Radio label='Movies List' isSelected={filter === 'All'} changed={all.current} />
					<Radio label='Queue List' isSelected={filter === 'IN_QUEUE'} changed={inQueue.current} />
				</RadioGroup>
				<BtnFetch onClick={getNewMovies} status={status} />
			</Toolbar>
			<MobxList />
		</Page>
	);
};

export default observer(Mobx);
