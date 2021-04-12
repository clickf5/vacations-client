import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import { io } from 'socket.io-client';
import { AuthProvider } from './hooks/useAuth';
import App from './App.jsx';
import getStore from './store';
import { approveUser, dismissUser, addUser } from './slices/usersSlice.js';

import './styles/style.scss';

const store = getStore();

const socket = io();

socket.on('approve', ({ id }) => {
  store.dispatch(approveUser(id));
});

socket.on('dismiss', ({ id }) => {
  store.dispatch(dismissUser(id));
});

socket.on('signup', (user) => {
  store.dispatch(addUser(user));
});

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById('root'),
);
