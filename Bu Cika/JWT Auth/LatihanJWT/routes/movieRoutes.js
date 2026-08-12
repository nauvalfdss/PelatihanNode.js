const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

const auth = require('../middlewares/auth');

const { validateMovieCreate, validateMovieUpdate} = require('../middlewares/validation');

// public, tidak pakai token
router.get('/', movieController.getAll);
router.get('/:id', movieController.getById);

// protected, wajib memakai token, wajib lewati auth
router.post('/', auth, validateMovieCreate, movieController.create);
router.put('/:id', auth, validateMovieUpdate, movieController.update);
router.delete('/:id', auth, movieController.remove);

module.exports = router;