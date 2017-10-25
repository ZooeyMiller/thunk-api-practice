import { API_ERROR, ADD_GIF_SEARCH } from '../constants';

export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case API_ERROR:
      return 'Problem getting gif from the api, try a different search term?';
    case ADD_GIF_SEARCH:
      return '';
    default:
      return state;
  }
};
