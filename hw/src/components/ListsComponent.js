import React from 'react';
import './styles/ListsComponent.css';

const ListsComponent = () => {
  return (
    <div>
      <h2>Упорядоченный список</h2>
      <ol>
        <li>Пункт 1
          <ol>
            <li>Подпункт 1.1</li>
          </ol>
        </li>
        <li>Пункт 2</li>
      </ol>

      <h2>Неупорядоченный список</h2>
      <ul>
        <li>Пункт A
          <ul>
            <li>Подпункт A.1</li>
          </ul>
        </li>
        <li>Пункт B</li>
      </ul>
    </div>
  );
};

export default ListsComponent;
