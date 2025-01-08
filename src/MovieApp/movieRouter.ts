import express from 'express';
import {  getAllMovies, getMovieById, getAllGenres, getGenreById } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/all', getAllMovies);
movieRouter.get('/genres', getAllGenres);
movieRouter.get('/:id', getMovieById);
movieRouter.get('/genre/:id', getGenreById);

export default movieRouter;