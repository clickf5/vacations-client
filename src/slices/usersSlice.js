/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

const initialState = { entities: [], loading: true };

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
    approveUser: (state, action) => {
      const { entities } = state;

      const mappedEntities = entities.map((user) => {
        const { _id: id } = user;
        if (id === action.payload) {
          return { ...user, approved: true };
        }
        return user;
      });

      return { ...state, entities: mappedEntities };
    },
    dismissUser: (state, action) => {
      const { entities } = state;

      const mappedEntities = entities.map((user) => {
        const { _id: id } = user;
        if (id === action.payload) {
          return { ...user, approved: false };
        }
        return user;
      });

      return { ...state, entities: mappedEntities };
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addUser, deleteUser, approveUser, dismissUser,
} = usersSlice.actions;

export default usersSlice.reducer;
