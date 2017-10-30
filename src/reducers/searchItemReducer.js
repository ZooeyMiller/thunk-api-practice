// @flow
import { ADD_GIF_SEARCH, REMOVE_GIF_SEARCH } from '../constants';

type GifType = {
  searchTerm: string,
  time: string,
  image: string,
};

type GifAction = {
  type: string,
  searchTerm: string,
  time: string,
  image: string,
  index: number,
};

export const searchItemReducer = (
  state: Array<GifType> = [],
  action: GifAction
): Array<GifType> => {
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
