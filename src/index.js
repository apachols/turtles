'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

import AppReducer from './reducers/AppReducer';

let AppStore = createStore(AppReducer);

const mountNode = document.getElementById('root');

console.log(AppStore);

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  mountNode
);
