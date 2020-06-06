import { createStore } from 'redux';
import reducers from './reducers';

const restoreStateFromLocalStorage = () => {
  const stringifiedStore = localStorage.getItem('todoAppState');
  console.log('stringifiedStore', stringifiedStore);
  
  if (!stringifiedStore) {
    return {};
  }
  
  return JSON.parse(stringifiedStore);
};

const saveStateInLocalStorage = () => {
  const state = store.getState();
  const stringifiedStore = JSON.stringify(state);
  localStorage.setItem('todoAppState', stringifiedStore);
};

const state = restoreStateFromLocalStorage();
const store = createStore(reducers, state);

store.subscribe(saveStateInLocalStorage);

export default store;
