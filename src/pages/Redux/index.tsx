import React, { memo } from 'react';
import { Btn, Card, List, Page, Radio, RadioGroup } from '../../components';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store/reducer';
import { getNewMovies, setFilter, setLike, setQueue } from './store/action';
import movieFilter from './store/selectors/selectors';
import * as statusT from './store/constants/statusTypes';
import * as filterT from './store/constants/filterTypes';

const ReduxList = memo(function ReduxList() {
	const dispatch = useDispatch();
	const movies = useTypedSelector((state) => movieFilter(state.store.movies, state.filter));
	return (
		<List>
			{movies.map((movie) => {
				return <Card key={movie.id} movie={movie} onLike={() => dispatch(setLike(movie))} onQueue={() => dispatch(setQueue(movie))} />;
			})}
		</List>
	);
});

const Redux = () => {
	const dispatch = useDispatch();
	const [filter, status] = useTypedSelector((state) => [state.filter, state.store.status]);
	return (
		<Page>
			<RadioGroup>
				<Radio label='Movies List' isSelected={filter === filterT.ALL} changed={() => dispatch(setFilter(filterT.ALL))} />
				<Radio label='Queue List' isSelected={filter === filterT.IN_QUEUE} changed={() => dispatch(setFilter(filterT.IN_QUEUE))} />
				<Radio label='Not in Queue' isSelected={filter === filterT.NOT_IN_QUEUE} changed={() => dispatch(setFilter(filterT.NOT_IN_QUEUE))} />
			</RadioGroup>
			<Btn disabled={status === statusT.FETCH} onClick={async () => dispatch(await getNewMovies())} large>
				{status === statusT.FETCH ? 'Please Wait...' : status === statusT.ERROR ? 'Try Again!' : 'Get New Movies'}
			</Btn>
			<ReduxList />
		</Page>
	);
};

export default memo(Redux);
