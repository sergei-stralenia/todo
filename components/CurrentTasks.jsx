import React from 'react';

import CurrentTask from './CurrentTask';

export default ({ tasks, handleComplete }) => {
  return (
    <div>
      {
        tasks.map(t => <CurrentTask key={t.id} task={t} handleComplete={handleComplete}></CurrentTask>)
      }
    </div>
  );
};