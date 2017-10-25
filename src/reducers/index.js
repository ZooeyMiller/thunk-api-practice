import { combineReducers } from 'redux';
import { searchReducer as searchTerm } from './searchReducer';

const reducers = {
  searchTerm,
};

export default combineReducers(reducers);
