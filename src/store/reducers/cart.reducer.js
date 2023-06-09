import { sumaTotal } from "../../utils/functions/index";
import { cartTypes } from "../types";

const { ADD_CART, REMOVE_CART, CONFIRM_SPORT, REST } = cartTypes;

const initialState = {
  data: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let updateCart = [];
      if (state.data.find((item) => item.id === action.item.id)) {
        updateCart = state.data.map((item) => {
          if (item.id === action.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        updateCart = [...state.data, item];
      }
      return {
        ...state,
        data: updateCart,
        total: sumaTotal(updateCart),
      };

    case REST:
      let restCar;
      if (action.item.quantity >= 1) {
        if (state.data.find((item) => item.id === action.item.id)) {
          restCar = state.data.map((item) => {
            if (item.id === action.item.id) item.quantity -= 1;
            return item;
          });
        }
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        data: restCar,
        total: sumaTotal(restCar),
      };

    case REMOVE_CART:
      const deleteSport = state.data.filter((item) => item.id !== action.id);
      return {
        ...state,
        data: deleteSport,
        total: sumaTotal(deleteSport),
      };

    case CONFIRM_SPORT:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
