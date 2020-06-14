import { createStore } from 'redux';
import reducers from './reducers';

const restoreStateFromLocalStorage = () => {
  const stringifiedStore = localStorage.getItem('todoAppState');
  
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
