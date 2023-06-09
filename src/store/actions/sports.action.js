import { sportsTypes } from "../types";

const { SELECT_SPORT, FILTER } = sportsTypes;

export const selectSport = (id) => ({
  type: SELECT_SPORT,
  sportsId: id,
});

export const filterSport = (id) => ({
  type: FILTER,
  id,
});
