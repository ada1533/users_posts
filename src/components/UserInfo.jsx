import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, selectUser } from '../store/usersSlice';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const UserInfo = () => {
  const user = useSelector(state => state.users.user);
  console.log(user);
  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
      dispatch(fetchUser(id))},[])
    

  return (
    <div>
      <h1>User Information</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserInfo;
