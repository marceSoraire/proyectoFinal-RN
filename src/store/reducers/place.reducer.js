import { placesTypes } from "../types/place.types";

const intialState = {
  places: [],
};

const placeReducer = (state = intialState, action) => {
  switch (action.type) {
    case placesTypes.ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };

    case placesTypes.GET_PLACE:
      return {
        ...state,
        places: action.payload,
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default placeReducer;
