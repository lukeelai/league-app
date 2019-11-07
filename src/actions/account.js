import {
  UPDATE_SUMMONER,
  ADD_CHAMPION_MASTERY,
  ADD_RANKED_INFO
} from "./actionTypes";

export const updateSummoner = (id, updates) => ({
  type: UPDATE_SUMMONER,
  id,
  updates
});

export const addChampionMastery = champions => ({
  type: ADD_CHAMPION_MASTERY,
  champions
});

export const addRankedInfo = ranked => ({
  type: ADD_RANKED_INFO,
  ranked
});
