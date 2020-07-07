import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './App';
import reducer from './reducers';
import reduxThunk from 'redux-thunk'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
