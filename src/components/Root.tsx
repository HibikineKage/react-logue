import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeCreator from '../store';

const { store, persistor } = storeCreator();
export default () => (
  <div>
    <Provider store={store}>
      <PersistGate persistor={persistor}>hoge</PersistGate>
    </Provider>
  </div>
);
