import { DISCIPLINES } from "../../constants";
import { disciplinesTypes } from "../types";

const { SELECT_DISCIPLINE } = disciplinesTypes;

const intialState = {
  data: DISCIPLINES,
  selected: null,
};

const disciplinesReducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECT_DISCIPLINE:
      const indexDiscipline = state.data.findIndex(
        (discipline) => discipline.id === action.disciplineId
      );

      if (indexDiscipline === -1) return state;

      return {
        ...state,
        selected: state.data[indexDiscipline],
      };

    default:
      return state;
  }
};

export default disciplinesReducer;
