import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as LikeUtil from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.postLike = (blogId) => store.dispatch(LikeUtil.postLike(blogId));
  window.destroyLike = (blogId) => store.dispatch(LikeUtil.destroyLike(blogId));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
