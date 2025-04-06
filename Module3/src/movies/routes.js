const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMovies);
router.get('/:id', controller.getMoviesById);
router.post('/', controller.addNewMovie);
router.put('/:id', controller.updateMovie);
router.get('/titles', controller.getMovieByTitle);
router.put('/titles', controller.updateMovieByTitle);

module.exports = router;