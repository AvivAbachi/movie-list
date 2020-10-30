import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { HiHeart, HiPlus, HiStar } from 'react-icons/hi';
import { Btn } from '.';
import { motion } from 'framer-motion';
import { getGenresName } from '../lib/genres';
import { CardProps } from './index.d';

const Card: FC<CardProps> = ({ movie, onLike, onQueue }) => {
	const titleRef = useRef<HTMLDivElement | null>(null);
	const [hover, setHover] = useState<boolean>(false);
	const [titleHight, setTitleHight] = useState<number>(0);
	const genresList = useRef(movie.genre_ids.map((genreID) => getGenresName(genreID)).join(' • '));
	const year = useRef(movie.release_date.slice(0, 4));
	const hoverStart = useRef(() => setHover(true));
	const hoverEnd = useRef(() => setHover(false));

	useEffect(() => {
		setTitleHight((titleRef.current?.clientHeight ?? 40) / 2 + 16);
	}, [titleRef]);
	return (
		<motion.div
			className='card'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0 }}
			whileHover={{ scale: 1.15, zIndex: 20, transition: { type: 'spring' } }}
			onHoverStart={hoverStart.current}
			onHoverEnd={hoverEnd.current}
			style={{ marginTop: titleHight + 48 }}
			layout>
			<div className='card__title' ref={titleRef}>
				{movie.title}
			</div>
			<div className='card__inner'>
				<motion.div
					style={{ paddingTop: titleHight }}
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
						<HiHeart />
					</motion.div>
				</Btn>
				<Btn onClick={onQueue} color='purple'>
					<motion.div animate={movie.isQueue ? { rotateZ: 45, scale: 1.125 } : { rotateZ: 0, scale: 1 }}>
						<HiPlus />
					</motion.div>
				</Btn>
				<Btn className='btn-vote'>
					{movie.vote_average}
					<HiStar color='#ffd800' />
				</Btn>
			</div>
		</motion.div>
	);
};

export const ObserverCard = observer(Card);
export default memo(Card);
