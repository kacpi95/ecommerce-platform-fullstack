import express from 'express';
import {
  addFavourite,
  getFavourites,
  removeFavourite,
} from './favourite.controller.js';

const router = express.Router();

router.get('/', getFavourites);
router.post('/', addFavourite);
router.delete('/:id', removeFavourite);

export default router;
