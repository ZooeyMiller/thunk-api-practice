import { UPDATE_SEARCH, ADD_GIF_SEARCH, API_ERROR } from '../constants';

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.searchTerm;
    case ADD_GIF_SEARCH:
      return '';
    case API_ERROR:
      return '';
    default:
      return state;
  }
};
