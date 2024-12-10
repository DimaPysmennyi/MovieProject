import client from "../client/client";

async function getAllMovies(){
    let movies = await client.movie.findMany({});
    return movies;
}

async function getMovieById(id: number){
    let movie = await client.movie.findUnique({
        where: {
            id: id
        }
    })

    return movie;
}

async function getAllGenres(){
    let genres = await client.genre.findMany({});
    return genres;
}

const movieRepository = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres
}

export default movieRepository;