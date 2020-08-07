import { createStore } from 'redux';
import reducers from './reducers';
import { setStore } from './actions';
import initialState  from './initialState';

let store;

const isServerUsed = process.env.USE_SERVER === 'true';
console.log('isServerUsed', isServerUsed);

if (isServerUsed) {
  const restoreStateFromServer = () => {
    fetch('/tasks')
      .then(response => response.json())
      .then(data => {
        data = data && data.todo;

        store.dispatch(setStore(data || initialState));
      });
  }

  const saveState = () => {
    const state = store.getState();

    return fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state),
    });
  };

  store = createStore(reducers);

  store.subscribe(saveState);
  restoreStateFromServer();
} else {
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
  store = createStore(reducers, state);

  store.subscribe(saveStateInLocalStorage);
}

export default store;
