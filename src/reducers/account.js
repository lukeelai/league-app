import { UPDATE_SUMMONER } from "../actions/actionTypes";

const DefaultState = {
  accountId: "",
  id: "",
  name: "",
  profileIconId: 0,
  puuid: "",
  revisionDate: 0,
  summonerLevel: 0
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case UPDATE_SUMMONER:
      if (action.id === state.id) {
        return state;
      } else {
        return { ...state, ...action.updates };
      }
    default:
      return state;
  }
};
