import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/root-reducer';
import logger from 'redux-logger';
import  thunk  from 'redux-thunk';

const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares)); 

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
  </BrowserRouter>,
 document.querySelector('#root'))   