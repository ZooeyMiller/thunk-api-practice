// @flow
import { API_ERROR, ADD_GIF_SEARCH, SEARCH_ERROR } from '../constants';

export const errorReducer = (
  state: string = '',
  action: { type: string }
): string => {
  switch (action.type) {
    case API_ERROR:
      return 'Problem getting gif from the api, try a different search term?';
    case SEARCH_ERROR:
      return 'Search cannot be empty';
    case ADD_GIF_SEARCH:
      return '';
    default:
      return state;
  }
};
