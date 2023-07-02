import { FIREBASE_REALTIME_DB_URL } from "../../constants";
import { ordersTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER } = ordersTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_REALTIME_DB_URL}/sports.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_REALTIME_DB_URL}/sports/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
