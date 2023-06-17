import Associate from "../../model/associate";
import { associateTypes } from "../types/associate.type";

const intialState = {
  associates: [],
};

const associateReducer = (state = intialState, action) => {
  switch (action.type) {
    case associateTypes.ADD_ASSOCIATE:
      // eslint-disable-next-line no-case-declarations
      const newAssociates = new Associate(Date.now(), action.payload.title, action.payload.image);
      return {
        ...state,
        associates: [...state.associates, newAssociates],
      };

    default:
      return state;
  }
};

export default associateReducer;
