import { ADD_GIF_SEARCH, REMOVE_GIF_SEARCH } from '../constants';

export const searchItemReducer = (state = [], action) {
  switch(action.type) {
    case ADD_GIF_SEARCH:
      return [...state, {term: action.term, time: new Date().toISOString(), image: "http://via.placeholder.com/350x350"}]
  }
}
