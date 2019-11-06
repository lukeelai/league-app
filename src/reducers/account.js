import { UPDATE_SUMMONER, ADD_CHAMPION_MASTERY } from "../actions/actionTypes";

const DefaultState = {
  accountId: "",
  id: "",
  name: "",
  profileIconId: 0,
  puuid: "",
  revisionDate: 0,
  summonerLevel: 0,
  championMastery: []
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case UPDATE_SUMMONER:
      if (action.id === state.id) {
        return state;
      } else {
        return { ...state, ...action.updates };
      }
    case ADD_CHAMPION_MASTERY:
      return {
        ...state,
        championMastery: [...action.champions]
      };
    default:
      return state;
  }
};
