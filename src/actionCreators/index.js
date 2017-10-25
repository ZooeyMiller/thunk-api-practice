import { UPDATE_SEARCH } from '../constants';

export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  searchTerm,
});
