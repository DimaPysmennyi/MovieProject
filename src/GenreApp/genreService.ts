import { IError, ISuccess } from "../types/types";
import genreRepository from "./genreRepository";
import { CreateGenre, Genre } from "./types";

async function getAllGenres(): Promise <IError | ISuccess<Genre[]>>{
    let result = await genreRepository.getAllGenres();
    if (!result){
        return {status: "error", message: "Did not get all genres"}
    }

    return {status: "success", data: result}
}

async function getGenreById(id: number): Promise <IError | ISuccess<Genre>>{
    let result = await genreRepository.getGenreById(id);
    if (!result){
        return {status: "error", message: "Did not get genre"}
    }

    return {status: "success", data: result}
}

async function getGenreByName(name: string): Promise <IError | ISuccess<Genre>>{
    let result = await genreRepository.getGenreByName(name);
    if (!result){
        return {status: "error", message: "Did not get genre"}
    }
    
    return {status: "success", data: result}
}

async function createGenre(data: CreateGenre): Promise <IError | ISuccess<Genre>>{
    let result = await genreRepository.createGenre(data);
    if (!result){
        return {status: "error", message: "Could not create genre"}
    }

    return {status: "success", data: result};
}

async function updateGenre(id: number, data: CreateGenre): Promise <IError | ISuccess<Genre>>{
    let result = await genreRepository.updateGenre(id, data);
    if (!result){
        return {status: "error", message: "Could not update genre"};
    }

    return {status: "success", data: result}
}

const genreService = {
    getAllGenres: getAllGenres,
    getGenreById: getGenreById,
    getGenreByName: getGenreByName,
    createGenre: createGenre,
    updateGenre: updateGenre
}

export default genreService;