import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>User Filter App</h1>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;