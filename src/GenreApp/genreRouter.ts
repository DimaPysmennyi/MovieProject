import { Router } from "express";
import { createGenre, getAllGenres, getGenreById, getGenreByName, updateGenre } from "./genreController";

const router = Router()

router.get('/all', getAllGenres);
router.get('/:id', getGenreById);
router.get('/:name', getGenreByName);
router.post('/create', createGenre);
router.post('/update', updateGenre);

export default router;