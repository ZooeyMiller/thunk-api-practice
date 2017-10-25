import {
  UPDATE_SEARCH,
  ADD_GIF_SEARCH,
  REMOVE_GIF_SEARCH,
  API_ERROR,
  SEARCH_ERROR,
} from '../constants';

export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  searchTerm,
});

export const addSearchItem = (searchTerm, image) => ({
  type: ADD_GIF_SEARCH,
  searchTerm,
  image,
});

export const removeSearchItem = index => ({
  type: REMOVE_GIF_SEARCH,
  index,
});

export const handleApiError = () => ({
  type: API_ERROR,
});

export const handleSearchError = () => ({
  type: SEARCH_ERROR,
});
