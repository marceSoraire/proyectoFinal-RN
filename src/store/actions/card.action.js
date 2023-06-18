import { FIREBASE_REALTIME_DB_URL } from "../../constants";
import { cartTypes } from "../types";
const { ADD_CART, REMOVE_CART, CONFIRM_SPORT, REST } = cartTypes;

export const addCart = (sports) => ({
  type: ADD_CART,
  item: sports,
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  id,
});

export const onRest = (sports) => ({
  type: REST,
  item: sports,
});

export const confirmSport = ({ cart, total }) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_REALTIME_DB_URL}/sports.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: cart,
          total,
        }),
      });

      const result = await res.json();
      dispatch({
        type: CONFIRM_SPORT,
        result,
      });
    } catch (error) {
      console.warn(error);
    }
  };
};
