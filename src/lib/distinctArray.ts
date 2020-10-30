const distinctArray = (newArray: MoviesT = [], existingArray: MoviesT = []): MoviesT => {
    const filterArray: MoviesT = newArray.filter((newMovie) => !existingArray.some((movie) => movie.id === newMovie.id));
    return [...filterArray, ...existingArray];
};

export default distinctArray;
