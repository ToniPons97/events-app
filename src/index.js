import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './state/Store';
import { incrementCounter } from './state/CounterState';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

store.subscribe(() => console.log('redux state: ' + store.getState()));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
