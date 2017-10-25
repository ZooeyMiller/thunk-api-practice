import { combineReducers } from 'redux';
import { searchReducer as searchTerm } from './searchReducer';
import { searchItemReducer as searches } from './searchItemReducer';
import { errorReducer as error } from './errorReducer';

const reducers = {
  searchTerm,
  searches,
  error,
};

export default combineReducers(reducers);
