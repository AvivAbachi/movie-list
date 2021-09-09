import { getGenresName } from './genres';

const fetchMovies = async (page: number): Promise<MoviesT> =>
	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=694f63345c41f7e0e3f2e7b5867eb8e2&language=en-US&page=${page}`)
		.then((res) => res.json())
		.then((res) => res.results)
		.then((res) =>
			res?.map((movie: MovieT) => {
				movie.genre_list = movie.genre_ids?.map((genreID) => getGenresName(genreID)).join(' • ');
				movie.release_date = movie.release_date?.slice(0, 4);
				return movie;
			})
		)
		.catch((error) => {
			console.error(error);
		});

export default fetchMovies;
