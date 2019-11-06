import { UPDATE_SUMMONER } from "./actionTypes";

export const updateSummoner = (id, updates) => ({
  type: UPDATE_SUMMONER,
  id,
  updates
});
