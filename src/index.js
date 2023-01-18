import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './state/Store';
import { incrementCounter } from './state/CounterState';
import { counterState2 } from './state/CounterState2';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

store.subscribe(() => console.log(store.getState()));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));

store.subscribe(() => console.log(store.getState()));

store.dispatch(counterState2.actions.incCounter(3));
store.dispatch(counterState2.actions.incCounter(7));
store.dispatch(counterState2.actions.incCounter(13));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
