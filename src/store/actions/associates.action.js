import { associateTypes } from "../types/associate.type";

const { ADD_ASSOCIATE } = associateTypes;

export const addAssociate = (associate) => {
  return {
    type: ADD_ASSOCIATE,
    payload: associate,
  };
};
