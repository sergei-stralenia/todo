import React from 'react';

export default ({ task, handleUndo, handleDelete }) => {
  return (
    <div>
      <span>{task.name}</span>
      <button onClick={() => handleUndo(task)}>
        Undo
      </button>
      <button onClick={() => handleDelete(task)}>
        Delete
      </button>
    </div>
  );
};
