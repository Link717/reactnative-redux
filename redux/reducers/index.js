import { combineReducers } from 'redux';
import addToDoReducer from './addToDoReducer';
import doneListReducer from './doneListReducer';

export default combineReducers({ addToDoReducer, doneListReducer });
