import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/actions';
import styles from './UserForm.module.css';

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || status.trim() === '') {
            setError('Name and Status are required');
            return;
        }
        dispatch(setUserInfo({ name, status }));
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Update User Information</h2>
            <label className={styles.label}>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                />
            </label>
            <label className={styles.label}>
                Status:
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={styles.input}
                />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button}>Update</button>
        </form>
    );
};

export default UserForm;