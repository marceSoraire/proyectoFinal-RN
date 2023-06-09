import { SPORTS } from "../../constants";
import { sportsTypes } from "../types";

const { SELECT_SPORT, FILTER } = sportsTypes;

const intialState = {
  data: SPORTS,
  selected: null,
  filter: [],
};

const sportsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECT_SPORT:
      return {
        ...state,
        selected: state.data.find((sport) => sport.id === action.sportsId),
      };
    case FILTER:
      return {
        ...state,
        filterSport: state.data.filter((sport) => sport.id === action.id),
      };
    default:
      return state;
  }
};

export default sportsReducer;
