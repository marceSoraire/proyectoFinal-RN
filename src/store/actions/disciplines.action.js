import { disciplinesTypes } from "../types";

const { SELECT_DISCIPLINE } = disciplinesTypes;

export const selectDiscipline = (id) => ({
  type: SELECT_DISCIPLINE,
  disciplineId: id,
});
