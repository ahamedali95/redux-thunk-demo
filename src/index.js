import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import index from './reducers/index';
import Home from './components/Home';

const middlewares = [thunk];
const store = createStore(index, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
