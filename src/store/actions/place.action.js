import { Alert } from "react-native";

import { insertPlace, selectPlaces } from "../../db";
import Place from "../../model/place";
import { URL_GEOCODING } from "../../utils/maps/maps";
import { placesTypes } from "../types/place.types";

export const addPlace = (place) => {
  return {
    type: placesTypes.ADD_PLACE,
    payload: place,
  };
};

export const getPlace = (places) => {
  return {
    type: placesTypes.GET_PLACE,
    payload: places,
  };
};

export const addPlaceAsync = (title, image, coords) => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_GEOCODING(coords.lat, coords.lng));
      if (!res.ok) Alert.alert("Error", "Lo siento, algo salio mal!");
      const data = await res.json();
      if (!data.results) Alert.alert("Error", "No se ha podido encontrar la direccion");

      const addres = data.results[0].formatted_address;

      const result = await insertPlace(title, image, addres, coords);
      const newPlace = new Place(result.insertId, title, image, addres, coords);

      dispatch(addPlace(newPlace));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPlacesAsync = () => {
  return async (dispatch) => {
    try {
      const result = await selectPlaces();
      const selected = result?.rows?._array;

      if (selected) {
        dispatch(getPlace(selected));
      } else {
        dispatch(getPlace([]));
      }
    } catch (error) {
      console.error(error);
      dispatch(getPlace([]));
    }
  };
};
