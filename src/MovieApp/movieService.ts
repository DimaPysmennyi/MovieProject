import { IError, ISuccess } from "../types/types";
import movieRepository from "./movieRepository";
import { Movie } from "./types";

async function getAllMovies(): Promise <IError | ISuccess<Movie[]>>{
    let context = await movieRepository.getAllMovies();
    if (!context){
        return {status: "error", message: "Did not get all movies"}
    }
    
    return {status: "success", data: context}
}

async function getMovieById(id: string): Promise <IError | ISuccess<Movie>>{
    let context = await movieRepository.getMovieById(+id);
    if (!context){
        return {status: "error", message: "Did not get movie"}
    }
    
    return {status: "success", data: context}
}


async function updateMovieRating(id: string, rating: number): Promise <IError | ISuccess<Movie>>{
    let context = await movieRepository.updateMovieRating(+id, rating);
    if (!context){
        return {status: "error", message: "Could not update rating"}
    }
    
    return {status: "success", data: context}
}


async function getActorById(id: number) {
    let context = await movieRepository.getActorById(id);
    return context;
}

const movieService = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById,
    updateMovieRating: updateMovieRating,
    getActorById: getActorById
}

export default movieService;