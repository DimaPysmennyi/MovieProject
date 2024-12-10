import movieRepository from "./movieRepository";

async function getAllMovies(){
    let context = {movies: await movieRepository.getAllMovies()};
    return context;
}

async function getMovieById(id: string){
    let context = {movie: await movieRepository.getMovieById(+id)};
    return context;
}

async function getAllGenres(){
    let context = {genres: await movieRepository.getAllGenres()};
    return context;
}

const movieService = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres
}

export default movieService;