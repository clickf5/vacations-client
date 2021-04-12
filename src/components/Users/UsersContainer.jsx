import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../slices/usersSlice.js';
import Users from './Users.jsx';

const UsersContainer = () => {
  const { entities, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading && entities.length === 0) {
    return <div>loading</div>;
  }

  return <Users users={entities} />;
};

export default UsersContainer;
