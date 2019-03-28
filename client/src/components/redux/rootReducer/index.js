import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from '../../session/sessionReducer';

import {
  dishesReducer,
  entityReducer,
  errorReducer,
  loadingReducer,
  availableCategoriesReducer,
  filterByCategoryReducer,
  filterByNameReducer,
} from '../../modules/menu/duck/reducers';

import cartReducer from '../../modules/cart/duck/reducers';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart',
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  dishListIds: dishesReducer,
  cart: cartReducer,
  entities: entityReducer,
  availableCategories: availableCategoriesReducer,
  filterByCategory: filterByCategoryReducer,
  filterByName: filterByNameReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
