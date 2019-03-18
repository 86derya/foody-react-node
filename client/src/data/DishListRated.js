import DishList from './DishList.json';

const DishRated = DishList.map(dish => ({
  id: dish.id,
  name: dish.name,
  image: dish.image,
  description: dish.description,
  price: dish.price,
  ingredients: dish.ingredients,
  rating: [],
  comments: [],
}));

export default DishRated;
