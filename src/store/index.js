// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import placeReducer from "./place.slice";
import {
  disciplinesReducer,
  categoryReducer,
  cartReducer,
  sportsReducer,
  authReducer,
  placeReducer,
} from "./reducers";

const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  categorys: categoryReducer,
  cart: cartReducer,
  sports: sportsReducer,
  auth: authReducer,
  places: placeReducer,
});

// export const store = configureStore({
//   reducer: {
//     place: placeReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

export default createStore(rootReducer, applyMiddleware(thunk));
