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

export const addPlaceAsync = (title, img, location) => {
  return async (dispatch) => {
    try {
      const res = await fetch(URL_GEOCODING(location.lat, location.lng));
      if (!res.ok) Alert.alert("Error", "Lo siento, algo salio mal!");
      const data = await res.json();
      if (!data.results) Alert.alert("Error", "No se ha podido encontrar la direccion");

      const addres = data.results[0].formatted_address;

      const result = await insertPlace(title, img, addres, location);
      const newPlace = new Place(result.insertId, title, img, addres, location);

      dispatch(addPlace(newPlace));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPlaces = () => {
  return async (dispatch) => {
    try {
      const result = await selectPlaces();
      const selected = result?.rows?._array;

      if (selected) {
        dispatch(addPlace(selected));
      }
    } catch (error) {
      console.error(error);
    }
  };
};
