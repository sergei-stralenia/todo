import React from 'react';

import CompletedTask from './CompletedTask';

export default ({ tasks, handleUndo, handleDelete }) => {
  return (
    <div>
      {
        tasks.map(t => <CompletedTask key={t.id} task={t} handleUndo={handleUndo} handleDelete={handleDelete}></CompletedTask>)
      }
    </div>
  );
};
