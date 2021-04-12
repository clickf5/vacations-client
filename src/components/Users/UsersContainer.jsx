import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../../slices/usersSlice.js';
import Users from './Users.jsx';
import routes from '../../routes.js';

const approveHandler = (id) => async () => {
  const approvePath = routes.approvePath(id);
  await axios.patch(approvePath, { withCredentials: true });
};

const dismissHandler = (id) => async () => {
  const dismissPath = routes.dismissPath(id);
  await axios.patch(dismissPath, { withCredentials: true });
};

const UsersContainer = () => {
  const { entities, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading && entities.length === 0) {
    return <div>loading</div>;
  }

  return <Users users={entities} approveHandler={approveHandler} dismissHandler={dismissHandler} />;
};

export default UsersContainer;
