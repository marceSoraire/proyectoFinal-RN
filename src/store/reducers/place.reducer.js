// import { documentDirectory, moveAsync } from "expo-file-system";

import Place from "../../model/place";
import { placesTypes } from "../types/place.types";

// const { ADD_PLACE } = placesTypes;

const intialState = {
  places: [],
};

const placeReducer = (state = intialState, action) => {
  switch (action.type) {
    case placesTypes.ADD_PLACE:
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      return {
        ...state,
        places: [...state.places, newPlace],
      };

    default:
      return state;
  }
};

export default placeReducer;
