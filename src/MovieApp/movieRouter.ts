import express from 'express';
import {  getAllMovies, getMovieById, getAllGenres, getGenreById, updateMovieRating } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/all', getAllMovies);
movieRouter.get('/genres', getAllGenres);
movieRouter.get('/:id', getMovieById);
movieRouter.get('/genre/:id', getGenreById);
movieRouter.post('/:id/updateMovieRating', updateMovieRating);

export default movieRouter;