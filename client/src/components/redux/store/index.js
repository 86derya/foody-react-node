import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from '../rootReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
