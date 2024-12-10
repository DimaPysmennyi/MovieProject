import express from 'express';
import {  getAllMovies, getMovieById, getAllGenres } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/all', getAllMovies);
movieRouter.get('/genres', getAllGenres);
movieRouter.get('/:id', getMovieById);

export default movieRouter;