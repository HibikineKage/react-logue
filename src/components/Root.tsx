import * as React from 'react';
import storeCreator from '../store';
import { Provider } from 'react-redux';

const store = storeCreator();
export default () => (
  <div>
    <Provider store={store}>hoge</Provider>
  </div>
);
