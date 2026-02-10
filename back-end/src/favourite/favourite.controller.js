import * as favouriteService from './favourite.service.js';

export const getFavourites = async (req, res) => {
  try {
    const favourites = await favouriteService.getAll();
    res.json(favourites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch favourites' });
  }
};

export const addFavourite = async (req, res) => {
  try {
    const { productId } = req.body;
    const favourite = await favouriteService.add(productId);
    res.status(200).json(favourite);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to add favourite' });
  }
};

export const removeFavourite = async (req, res) => {
  try {
    const { id } = req.params;
    const favourite = await favouriteService.remove(id);
    res.json(favourite);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Favourite not found' });
  }
};
