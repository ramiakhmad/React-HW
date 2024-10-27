// List.jsx
import React, { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ]);

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Список приглашенных:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {people.map((person) => (
          <li key={person.id} style={listItemStyle}>
            {person.name} ({person.age} лет)
            <button onClick={() => handleRemove(person.id)} style={buttonStyle}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const listItemStyle = {
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  fontSize: '14px',
  backgroundColor: '#ff0000',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default List;
