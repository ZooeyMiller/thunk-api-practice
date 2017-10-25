import { UPDATE_SEARCH } from '../constants';
import { updateSearchState } from '../utils/searchUtils';

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.searchTerm;
    default:
      return state;
  }
};
