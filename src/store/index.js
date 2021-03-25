import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.js';

const reducer = {
  isAuth: authReducer,
};

export default () => configureStore({
  reducer,
  devTools: (process.env.NODE_ENV !== 'production'),
});
