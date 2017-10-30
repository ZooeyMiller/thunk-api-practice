// @flow
import { UPDATE_SEARCH, ADD_GIF_SEARCH, API_ERROR } from '../constants';

type SearchAction = {
  type: string,
  searchTerm: string,
};

export const searchReducer = (
  state: string = '',
  action: SearchAction
): string => {
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
