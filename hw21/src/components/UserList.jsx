
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../userSlice';

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
