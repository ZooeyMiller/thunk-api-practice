import { ADD_GIF_SEARCH, REMOVE_GIF_SEARCH } from '../constants';

export const searchItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GIF_SEARCH:
      return [
        ...state,
        {
          searchTerm: action.searchTerm,
          time: new Date().toISOString(),
          image: 'http://via.placeholder.com/350x350',
        },
      ];
    case REMOVE_GIF_SEARCH:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
