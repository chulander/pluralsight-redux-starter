/* eslint-disable*/

import {combineReducers} from 'redux';

/* eslint-enable*/

import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
