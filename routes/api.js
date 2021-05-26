const { Router } = require('express');
const { newMovie, getAllMovies, getMovieById, editMovie, deleteMovie} = require('../controllers/movie.controller')
const router = Router();

router.post('/movies', newMovie)
router.get('/movies', getAllMovies)
router.get('/movies/:id', getMovieById)
router.patch('/movies/:id/edit', editMovie)
router.delete('/movies/:id/delete', deleteMovie)
module.exports = router;
