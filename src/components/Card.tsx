import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Btn } from '.';
import { motion } from 'framer-motion';
import { getGenresName } from '../lib/genres';
import { CardProps } from './index.d';

import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Star } from '../assets/icons/star.svg';

const Card: FC<CardProps> = ({ movie, onLike, onQueue }) => {
	const titleRef = useRef<HTMLDivElement | null>(null);
	const [hover, setHover] = useState<boolean>(false);
	const [titleHight, setTitleHight] = useState<number>(0);
	const genresList = useRef(movie.genre_ids.map((genreID) => getGenresName(genreID)).join(' • '));
	const year = useRef(movie.release_date.slice(0, 4));
	const hoverStart = useRef(() => setHover(true));
	const hoverEnd = useRef(() => setHover(false));

	useEffect(() => {
		setTitleHight((titleRef.current?.clientHeight ?? 40) / 2);
	}, [titleRef]);
	return (
		<motion.div
			className='card'
			style={{ marginTop: `calc(${titleHight}px + 2rem)` }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0 }}
			whileHover={{ scale: 1.15, zIndex: 5, transition: { type: 'spring' } }}
			onMouseEnter={hoverStart.current}
			onMouseLeave={hoverEnd.current}
			layout>
			<div ref={titleRef} className='card__title'>
				{movie.title}
			</div>
			<div className='card__inner'>
				<motion.div
					style={{ paddingTop: `calc(${titleHight}px + 1rem)` }}
					className='card__back'
					initial={{ rotateY: -180 }}
					transition={{ type: 'spring', stiffness: 75 }}
					animate={{ rotateY: hover ? 0 : -180 }}>
					<p className='card__overview'>{movie.overview}</p>
					<div className='card__genres'>
						{genresList.current}
						<br />
						{year.current}
					</div>
				</motion.div>
				<motion.img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt=''
					className='card__img'
					animate={{ rotateY: hover ? 180 : 0 }}
					transition={{ type: 'spring', stiffness: 75 }}
				/>
			</div>
			<div className='card__buttons'>
				<Btn onClick={onLike} color='red'>
					<motion.div animate={{ opacity: movie.like ? 1 : 0.5 }}>
						<Heart />
					</motion.div>
				</Btn>
				<Btn className='btn-vote'>
					{movie.vote_average}
					<Star fill={'#ffd800'} />
				</Btn>
				<Btn onClick={onQueue} color='purple'>
					<motion.div animate={movie.isQueue ? { rotateZ: 45, scale: 1.125 } : { rotateZ: 0, scale: 1 }}>
						<Plus />
					</motion.div>
				</Btn>
			</div>
		</motion.div>
	);
};

export const ObserverCard = observer(Card);
export default memo(Card);
