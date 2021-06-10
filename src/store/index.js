import {createStore, combineReducers, compose, applyMiddleware,} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';
import instructionsReducer from './reducers/instructions';
import tagsReducer from './reducers/tags';

const rootReducer = combineReducers({
    user: userReducer,
    instructions: instructionsReducer,
    tags: tagsReducer
})

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}
  
function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
}
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage();
const store = createStore(
    rootReducer,
    presistedState,
    composeEnhancers(applyMiddleware(thunk)),
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;