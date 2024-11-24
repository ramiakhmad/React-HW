import React from 'react';
import { useSelector } from 'react-redux';
import styles from './User.module.css';

const User = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className={styles.user}>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Status: {user.status}</p>
        </div>
    );
};

export default User;