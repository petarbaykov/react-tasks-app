import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import initStore from './store'
import './index.scss';

const { store, persistor } = initStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
