import React from 'react';

import AddTaskForm from '../containers/AddTaskForm';
import CurrentTasks from '../containers/CurrentTasks';
import CompletedTasks from '../containers/CompletedTasks';

export default () => {
  return (
    <div>
      <h1>To Do App</h1>
      <AddTaskForm/>
      <CurrentTasks/>
      <hr/>
      <CompletedTasks/>
    </div>
  );
};
