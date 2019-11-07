import {
  UPDATE_SUMMONER,
  ADD_CHAMPION_MASTERY,
  ADD_RANKED_INFO
} from "../actions/actionTypes";

const DefaultState = {
  accountId: "",
  id: "",
  name: "",
  profileIconId: 0,
  puuid: "",
  revisionDate: 0,
  summonerLevel: 0,
  championMastery: [],
  rankedInfo: []
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
      if (state.championMastery !== action.champions)
        return {
          ...state,
          championMastery: [...action.champions]
        };
      return state;
    case ADD_RANKED_INFO:
      if (
        state.id.toLowerCase() === action.ranked[0].summonerId.toLowerCase() &&
        action.ranked.length === state.rankedInfo.length
      ) {
        return state;
      }
      return {
        ...state,
        rankedInfo: [...action.ranked]
      };
    default:
      return state;
  }
};
