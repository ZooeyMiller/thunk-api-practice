import { ADD_GIF_SEARCH, REMOVE_GIF_SEARCH } from '../constants';

export const searchItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GIF_SEARCH:
      return [
        ...state,
        {
          searchTerm: action.searchTerm,
          time: action.time,
          image: action.image,
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
