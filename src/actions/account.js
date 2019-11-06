import { UPDATE_SUMMONER, ADD_CHAMPION_MASTERY } from "./actionTypes";

export const updateSummoner = (id, updates) => ({
  type: UPDATE_SUMMONER,
  id,
  updates
});

export const addChampionMastery = champions => ({
  type: ADD_CHAMPION_MASTERY,
  champions
});
