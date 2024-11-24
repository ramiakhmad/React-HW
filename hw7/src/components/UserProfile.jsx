
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className={styles.profile}>
      <img src={user.picture.large} alt="User" className={styles.avatar} />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={fetchUser} className={styles.button}>
        Load New User
      </button>
    </div>
  );
};

export default UserProfile;