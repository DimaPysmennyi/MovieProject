import express from 'express';
import {  getAllMovies, getMovieById, getAllGenres, getGenreById, updateMovieRating, getGenreByName } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/all', getAllMovies);
movieRouter.get('/genres', getAllGenres);
movieRouter.get('/:id', getMovieById);
movieRouter.get('/genre/:id', getGenreById);
movieRouter.get('/genre/:name', getGenreByName);
movieRouter.post('/:id/updateMovieRating', updateMovieRating);

export default movieRouter;