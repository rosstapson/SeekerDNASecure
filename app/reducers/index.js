import { combineReducers } from 'redux';
import * as assetsReducer from './assets';
import * as authReducer from './auth';
import * as chuckReducer from './chuck';

export default combineReducers(Object.assign({}, authReducer, assetsReducer, chuckReducer))