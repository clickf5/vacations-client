import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice.js';

const reducer = {
  users: usersReducer,
};

export default () => configureStore({
  reducer,
  devTools: (process.env.NODE_ENV !== 'production'),
});
