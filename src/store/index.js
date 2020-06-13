import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const key = 'root';

export const getState = () => {
  const state = localStorage.getItem(`persist:${key}`);
  
  if (!state) return {};

  return Object.entries(JSON.parse(state))
  .map(([key, value]) => ([key, JSON.parse(value)]))
  .filter(([, value]) => value !== undefined)
  .reduce((p, [k, v]) => ({ ...p, [k]: v }), {});
}

const persistConfig = {
  key,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store);
  return { store, persistor }
}