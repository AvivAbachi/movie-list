import { memo, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Btn, Icons } from '.';
import { motion } from 'framer-motion';
import { CardProps } from './index.d';

const Card = ({ movie, onLike, onQueue }: CardProps) => {
	const titleRef = useRef<HTMLDivElement | null>(null);
	const titleHeight = useRef(titleRef.current ? titleRef.current.clientHeight / 2 : 20);
	const [hover, setHover] = useState<boolean>(false);
	const hoverStart = useRef(() => setHover(true));
	const hoverEnd = useRef(() => setHover(false));

	return (
		<motion.div
			className='card'
			style={{ marginTop: `calc(${titleHeight.current}px + 2rem)` }}
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
					style={{ paddingTop: `calc(${titleHeight.current}px + 1rem)` }}
					className='card__back'
					initial={{ rotateY: -180 }}
					animate={{ rotateY: hover ? 0 : -180 }}
					transition={{ type: 'spring', stiffness: 75 }}>
					<p className='card__overview'>{movie.overview}</p>
					<div className='card__genres'>
						{movie.genre_list}
						<br />
						{movie.release_date}
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
					<motion.div animate={{ opacity: movie.like ? 1 : 0.33 }}>
						<Icons.Heart />
					</motion.div>
				</Btn>
				<Btn className='btn-vote'>
					{movie.vote_average}
					<Icons.Star />
				</Btn>
				<Btn onClick={onQueue} color='purple'>
					<motion.div animate={movie.isQueue ? { rotateZ: 45, scale: 1.125 } : { rotateZ: 0, scale: 1 }}>
						<Icons.Plus />
					</motion.div>
				</Btn>
			</div>
		</motion.div>
	);
};

export const ObserverCard = observer(Card);
export default memo(Card);
