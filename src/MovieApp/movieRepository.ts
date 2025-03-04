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

    }
    
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

async function getActorById(id: number){
    let actor = await client.actor.findUnique({
        where: {
            id: id
        },
        include: {
            movies: true
        }
    })
    return actor;
}

const movieRepository = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    updateMovieRating: updateMovieRating,
    getActorById: getActorById
}

export default movieRepository;