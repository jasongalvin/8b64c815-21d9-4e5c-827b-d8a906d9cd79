import React from 'react';
import { useUser } from '../hooks/useUser';
const UserProfile = ({ userId }) => {
  const user = useUser(userId);
  return user ? <div>Name: {user.name}</div> : <div>Loading...</div>;
};