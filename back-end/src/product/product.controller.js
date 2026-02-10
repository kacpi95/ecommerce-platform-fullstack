import * as productService from './product.service.js';
import { PATH_TO_ENDPOINT_MAPPING } from '../constants/api.js';

export const getProducts = async (req, res) => {
  try {
    const { gender, category, subcategory, _page, _limit } = req.query;
    const page = Number(_page) || 1;
    const limit = Number(_limit) || 8;

    const genderMapped = gender
      ? PATH_TO_ENDPOINT_MAPPING[gender] || gender
      : undefined;

    const { products, total } = await productService.getAll({
      gender: genderMapped,
      category,
      subcategory,
      page,
      limit,
    });

    res.setHeader('X-Total-Count', total);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await productService.getById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
};

export const getBestsellers = async (req, res) => {
  try {
    const gender = req.params.gender;
    const products = await productService.getBestsellers(gender);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch bestsellers' });
  }
};
