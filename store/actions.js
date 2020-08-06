export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UNDO_TASK = 'UNDO_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_STORE = 'SET_STORE';

export const addTask = taskName => {
  return {
    type: ADD_TASK,
    taskName,
  };
};

export const completeTask = task => {
  return {
    type: COMPLETE_TASK,
    task,
  };
};

export const undoTask = task => {
  return {
    type: UNDO_TASK,
    task,
  };
};

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    task,
  };
};

export const setStore = state => {
  return {
    type: SET_STORE,
    state,
  };
};
