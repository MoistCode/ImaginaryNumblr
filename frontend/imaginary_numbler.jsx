import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  //remove me
  console.log('test');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //remove me
  ReactDOM.render(<Root store={store} />, root);
});
