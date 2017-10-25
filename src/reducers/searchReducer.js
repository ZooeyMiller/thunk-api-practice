import { UPDATE_SEARCH, ADD_GIF_SEARCH } from '../constants';

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.searchTerm;
    case ADD_GIF_SEARCH:
      return '';
    default:
      return state;
  }
};
