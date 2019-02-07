import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../client/store';
import App from '../client/app';

module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)
  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  // render the App store static markup ins content variable
  let html = renderToString(
    <Provider store={store} >
      <App />
    </Provider>
  );

  return {html, preloadedState};
};