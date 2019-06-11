/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default () => {
  const store = createStore(
    persistReducer({ key: 'root', storage }, reducer),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)()
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
