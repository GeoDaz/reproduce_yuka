// modules
import { combineReducers } from 'redux';
// reducers
import history from './history';
import favorites from './favorites';

export default combineReducers({ history, favorites });
