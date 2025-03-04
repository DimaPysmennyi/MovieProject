import express from 'express';
import {  getAllMovies, getMovieById, updateMovieRating, getActorById } from './movieController';

const movieRouter = express.Router();

movieRouter.get('/all', getAllMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.post('/:id/updateMovieRating', updateMovieRating);
movieRouter.get('/actor/:id', getActorById);

export default movieRouter;