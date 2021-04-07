import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

const initialState = { entities: [], loading: 'idle' };

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async () => {
    const response = await axios.get(routes.usersPath(), { withCredentials: true });
    return response.data;
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => [...state, action.payload],
    deleteUser: (state, action) => state.filter((user) => user.id !== action.payload),
  },
  extraReduserc: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.entities = action.payload;
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
