import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!userData) {
    return (
      <div>
        <h1>You're not logged in</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={userData.avatar} alt={userData.name} />
      <button onClick={handleLogout}>Logout</button>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
