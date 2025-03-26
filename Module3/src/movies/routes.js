const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMovies);
router.get('/:movieId', controller.getMoviesById);

module.exports = router;