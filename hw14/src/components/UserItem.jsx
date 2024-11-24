import react from 'react';
import styles from '../styles/UserItem.module.css';

const UserItem = ({ user }) => {
    return <div className={styles.useritem}>{user.name}</div>;
};

export default UserItem;