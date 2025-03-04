import client from "../client/client";
import { CreateGenre } from "./types";

async function getAllGenres(){
    let genres = await client.genre.findMany({});
    return genres;
}

async function getGenreById(id: number){
    let genre = await client.genre.findUnique({
        where: {
            id: id,
        },
        include: {
            movies: true,
        }
    })
    return genre;
}

async function getGenreByName(name: string){
    let genre = await client.genre.findUnique({
        where: {
            name: name,
        },
        include: {
            movies: true,
        }
    })
    return genre;
}

async function createGenre(data: CreateGenre){
    let genre = await client.genre.create({
        data: data
    });
    return genre;
}

async function updateGenre(id: number, data: CreateGenre){
    let genre = await client.genre.update({
        where: {
            id: id
        },
        data: data
    });
    return genre;
}

const genreRepository = {
    getAllGenres: getAllGenres,
    getGenreById: getGenreById,
    getGenreByName: getGenreByName,
    createGenre: createGenre,
    updateGenre: updateGenre,
}

export default genreRepository;