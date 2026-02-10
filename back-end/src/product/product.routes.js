import express from 'express';
import {
  getProducts,
  getProductById,
  getBestsellers,
} from './product.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/:gender/bestsellers', getBestsellers);

router.get('/:productId', getProductById);

export default router;
