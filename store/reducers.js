import { combineReducers } from 'redux';
import { uuid } from 'uuidv4';
 
import { ADD_TASK, COMPLETE_TASK, UNDO_TASK, DELETE_TASK } from './actions';
import initialState from './initialState';

const addTask = (state, action) => {
  const currentTasks = [
    ...state.currentTasks,
    {
      id: uuid(),
      name: action.taskName,
    },
  ];

  return {
    ...state,
    currentTasks,
  };
};

const completeTask = (state, action) => {
  const task = state.currentTasks.find(t => t.id === action.task.id);
  const currentTasks = state.currentTasks.filter(t => t.id !== task.id);
  const completedTasks = [
    ...state.completedTasks,
    task
  ];
    
  return {
    ...state,
    currentTasks,
    completedTasks,
  };
};

const undoTask = (state, action) => {
  const task = state.completedTasks.find(t => t.id === action.task.id);
  const completedTasks = state.completedTasks.filter(t => t.id !== task.id);
  const currentTasks = [
    ...state.currentTasks,
    task
  ];
    
  return {
    ...state,
    currentTasks,
    completedTasks,
  };
};

const deleteTask = (state, action) => {
  const completedTasks = state.completedTasks.filter(t => t.id !== action.task.id);
    
  return {
    ...state,
    completedTasks,
  };
};

const todo = (state = initialState, action) => {
  switch(action.type) {
  case ADD_TASK: 
    return addTask(state, action);
  case COMPLETE_TASK:
    return completeTask(state, action);
  case UNDO_TASK:
    return undoTask(state, action);
  case DELETE_TASK:
    return deleteTask(state, action);
  default:
    return state;
  }
};

export default combineReducers({ todo });
