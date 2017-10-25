import { combineReducers } from 'redux';
import { searchReducer as searchTerm } from './searchReducer';
import { searchItemReducer as searches } from './searchItemReducer';

const reducers = {
  searchTerm,
  searches,
};

export default combineReducers(reducers);
