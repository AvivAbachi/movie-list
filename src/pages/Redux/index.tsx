import React, { memo, useRef } from 'react';
import { Card, List, Page, Radio, RadioGroup } from '../../components';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store/reducer';
import { getNewMovies, setFilter, setLike, setQueue } from './store/action';
import movieFilter from './store/selectors/selectors';
import * as filterT from './store/constants/filterTypes';
import { CardProps } from '../../components/index.d';
import BtnFetch from '../../components/BtnFetch';

const ReduxCard = memo<CardProps>(function ReduxCard({ movie }) {
	const dispatch = useDispatch();
	return <Card key={movie.id} movie={movie} onLike={() => dispatch(setLike(movie))} onQueue={() => dispatch(setQueue(movie))} />;
});

const ReduxList = memo(function ReduxList() {
	const movies = useTypedSelector((state) => movieFilter(state.store.movies, state.filter));
	return (
		<List>
			{movies.map((movie) => (
				<ReduxCard key={movie.id} movie={movie} />
			))}
		</List>
	);
});

const Redux = () => {
	const dispatch = useDispatch();
	const filter = useTypedSelector((state) => state.filter);
	const status = useTypedSelector((state) => state.store.status);
	const all = useRef(() => dispatch(setFilter(filterT.ALL)));
	const inQueue = useRef(() => dispatch(setFilter(filterT.IN_QUEUE)));
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={filter === filterT.ALL} changed={all.current} />
				<Radio label='Queue List' isSelected={filter === filterT.IN_QUEUE} changed={inQueue.current} />
			</RadioGroup>
			<BtnFetch onClick={async () => dispatch(await getNewMovies())} status={status} />
			<ReduxList />
		</Page>
	);
};

export default memo(Redux);
