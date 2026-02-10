import express from 'express';
import {
  addFavourite,
  getFavourites,
  removeFavourite,
} from './favourite.controller';

const router = express.Router();

router.get('/favourites', getFavourites);
router.post('/favourites', addFavourite);
router.delete('/favourites/:id', removeFavourite);

export default router;
