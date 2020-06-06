import React, { useState } from 'react';

export default ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    handleAdd(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>
        Add
      </button>
    </div>
  )
}