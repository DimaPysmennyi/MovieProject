import { Request, Response } from "express";
import movieService from "./movieService";

export async function getAllMovies(req: Request, res: Response){
    const context = await movieService.getAllMovies();
    console.log(context)
    res.json(context);
}

export async function getMovieById(req: Request, res: Response){
    const id = req.params.id;
    const context = await movieService.getMovieById(id);
    res.json(context)
}

export async function getAllGenres(req: Request, res: Response){
    const context = await movieService.getAllGenres();
    res.json(context);
}

export async function getGenreById(req: Request, res: Response){
    const id = req.params.id;
    const context = await movieService.getGenreById(id);
    res.json(context);
}

export async function updateMovieRating(req: Request, res: Response){
    const id = req.params.id;
    const rating = req.body.rating;
    let context = await movieService.updateMovieRating(id, rating);
    res.json(context);
}