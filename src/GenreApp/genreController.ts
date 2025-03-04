import genreService from "./genreService";
import { Request, Response } from "express";

export async function getAllGenres(req: Request, res: Response){
    let result = await genreService.getAllGenres();
    res.json(result);
}

export async function getGenreById(req: Request, res: Response){
    let result = await genreService.getGenreById(+req.params.id);
    res.json(result);
}

export async function getGenreByName(req: Request, res: Response){
    let result = await genreService.getGenreByName(req.params.name);
    res.json(result);
}

export async function createGenre(req: Request, res: Response){
    const data = req.body
    let result = await genreService.createGenre(data);
    res.json(result);
}

export async function updateGenre(req: Request, res: Response){
    const data = req.body
    let result = await genreService.updateGenre(+req.params.id, data);
    res.json(result);
}
