export const fetchMovies = async (page: number): Promise<MoviesT> => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=694f63345c41f7e0e3f2e7b5867eb8e2&language=en-US&page=${page}`)
        .then((res) => res.json())
        .then((res) => res.results)
        .catch((error) => {
            console.error(error);
        });
};
