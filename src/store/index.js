import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token']
};

const pReducer = persistReducer(persistConfig, rootReducer);
const enhancer = composeEnhancers(
  applyMiddleware()
);
const store = createStore(
    pReducer, 
    enhancer
);
const persistor = persistStore(store);

export { persistor, store };