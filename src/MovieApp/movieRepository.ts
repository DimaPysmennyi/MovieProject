import client from "../client/client";

async function getAllMovies(){
    let movies = await client.movie.findMany({
        include: {
            genres: true,
            // actors: true,
        }
    });
    return movies;
}

async function getMovieById(id: number){
    let movie = await client.movie.findUnique({
        where: {
            id: id
        },
        include: {
            genres: true,
            actors: true,
        }
    })

    // console.log(movie.genres);

    return movie;
}

async function getAllGenres(){
    let genres = await client.genre.findMany({});
    return genres;
}

async function getGenreById(id: number){
    let genre = await client.genre.findUnique({
        where: {
            id: id,
        }
    })
    return genre;
}

const movieRepository = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres,
    getGenreById: getGenreById
}

export default movieRepository;