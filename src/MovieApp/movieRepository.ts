import client from "../client/client";

function ratingCalculation(ratingList: string){
    let ratingArray = ratingList.split(',');
    let numberRatingArray = [];
    
    for (let rate of ratingArray){
        numberRatingArray.push(+rate);
    }
    
    const ratingAvg = numberRatingArray.reduce((a, b) => a+b, 0) / numberRatingArray.length;
    console.log(ratingAvg);
    return ratingAvg;

}

async function getAllMovies(){
    let movies = await client.movie.findMany({
        include: {
            genres: true,
            actors: true,
            reviews: true
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
            reviews: true
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

async function updateMovieRating(id: number, newRating: number){
    let movie = await client.movie.findUnique({
        where: {
            id: id,
        }
    });

    if (!movie?.allRates) {
        let updatedMovie = await client.movie.update({
            where: {
                id: id,
            },
            data: {
                allRates: `${newRating}`,
                rating: ratingCalculation(`${movie?.allRates},${newRating}`)
            }
        });
        return updatedMovie;

    }else {
        let updatedMovie = await client.movie.update({
            where: {
                id: id,
            },
            data: {
                allRates: `${movie?.allRates},${newRating}`,
                rating: ratingCalculation(`${movie?.allRates},${newRating}`)
            }
        });
        return updatedMovie;
    }
    

    
}

const movieRepository = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres,
    getGenreById: getGenreById,
    updateMovieRating: updateMovieRating,
}

export default movieRepository;