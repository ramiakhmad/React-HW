import React, {useState, useCallback, useMemo} from 'react';
import UserList from './components/UserList';
import './App.css';
const App = () => {
 const userList =useMemo(() =>  [
  { id: 1, name: 'Robin' },
  { id: 2, name: 'Dennis' },
  { id: 3, name: 'Morgan' },
  { id: 4, name: 'Alex' },
  { id: 5, name: 'Leslie' },
  { id: 6, name: 'Charlie' },
  { id: 7, name: 'Taylor' },
  { id: 8, name: 'Jamie' },
  { id: 9, name: 'Alex' },
  { id: 10, name: 'Shannon' },
  { id: 11, name: 'Jordan' },
  { id: 12, name: 'Cameron' },
  { id: 13, name: 'Alex' },
  { id: 14, name: 'Taylor' },
  { id: 15, name: 'Jamie' },
  { id: 16, name: 'Cameron' },
  { id: 17, name: 'Leslie' },
  { id: 18, name: 'Jordan' },
  { id: 19, name: 'Robin' },
  { id: 20, name: 'Dennis' },
  ], );
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div className='fillter'>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;