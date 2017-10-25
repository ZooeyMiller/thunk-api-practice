import { UPDATE_SEARCH, ADD_GIF_SEARCH, REMOVE_GIF_SEARCH } from '../constants';

export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  searchTerm,
});

export const addSearchItem = searchTerm => ({
  type: ADD_GIF_SEARCH,
  searchTerm,
});

export const removeSearchItem = index => ({
  type: REMOVE_GIF_SEARCH,
  index,
});
