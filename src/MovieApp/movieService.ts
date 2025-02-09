import movieRepository from "./movieRepository";

async function getAllMovies(){
    let context = await movieRepository.getAllMovies()
    return context;
}

async function getMovieById(id: string){
    let context = await movieRepository.getMovieById(+id);
    return context;
}

async function getAllGenres(){
    let context = await movieRepository.getAllGenres();
    return context;
}


async function getGenreById(id: string){
    let context = await movieRepository.getGenreById(+id);
    return context;
}

async function updateMovieRating(id: string, rating: number){
    let context = await movieRepository.updateMovieRating(+id, rating);
    return context;
}

const movieService = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres,
    getGenreById: getGenreById,
    updateMovieRating: updateMovieRating
}

export default movieService;