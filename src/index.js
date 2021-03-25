import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import { AuthProvider } from './hooks/useAuth';
import App from './App.jsx';
import getStore from './store';

import './styles/style.scss';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById('root'),
);
