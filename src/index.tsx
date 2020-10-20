import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App';

import { store } from './store';

const rootElement = document.getElementById('root');

import(/*webpackChunkName: 'app' */ '@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  )
);
