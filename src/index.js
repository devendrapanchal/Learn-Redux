import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux'
// let store = createStore(reducer)
// store => globalized state
// action => action name 
// reducer
// dispatch
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(() =>console.log(store.getState()))
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
