import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './components/ValueDisplay';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    setDisplayValue(inputValue);
  };
  return (
    <div className="App">
      <h1> Current and Previous Value </h1>
      <input 
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type something..."
      />
      <button onClick={handleButtonClick} > Enter </button>
      <ValueDisplay value={displayValue}/>
    </div>
  )
}

export default App;