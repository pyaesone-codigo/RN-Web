/**
 * @format
 */
import React from 'react';
import ReactDOM from 'react-dom';
import WebApp from './WebApp';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <WebApp />
  </Provider>,
  document.getElementById('root'),
);
