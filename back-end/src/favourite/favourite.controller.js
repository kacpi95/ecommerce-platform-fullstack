import * as favouriteService from './favourite.service';

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
    const favourite = await favouriteService.add(Number(productId));
    res.status(200).json(favourite);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Product already in favourites' });
  }
};

export const removeFavourite = async (req, res) => {
  try {
    const { id } = req.params;
    const favourite = await favouriteService.remove(Number(id));
    res.json(favourite);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Favourite not found' });
  }
};
