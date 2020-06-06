import React from 'react';

export default ({ task, handleComplete }) => {
  return (
    <div>
      <input type="checkbox" onClick={() => handleComplete(task)}/>
      <span>{task.name}</span>
    </div>
  );
};
