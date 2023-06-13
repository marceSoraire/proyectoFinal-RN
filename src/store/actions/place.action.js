import { placesTypes } from "../types/place.types";

const { ADD_PLACE } = placesTypes;

export const agregarPlace = (place) => {
  return {
    type: ADD_PLACE,
    payload: place,
  };
};
