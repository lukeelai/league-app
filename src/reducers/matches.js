import { ADD_MATCHES } from "../actions/actionTypes";

const matchDefaultState = [];

export default (state = matchDefaultState, action) => {
  switch (action.type) {
    case ADD_MATCHES:
      if (state.length > 0 && action.match.length > 0) {
        if (state[0].gameId === action.match[0].gameId) return state;
      }
      return [...action.match];
    default:
      return state;
  }
};
