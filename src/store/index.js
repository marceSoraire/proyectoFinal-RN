import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  disciplinesReducer,
  categoryReducer,
  cartReducer,
  sportsReducer,
  authReducer,
  placeReducer,
  associateReducer,
} from "./reducers";

const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  categorys: categoryReducer,
  cart: cartReducer,
  sports: sportsReducer,
  auth: authReducer,
  place: placeReducer,
  associate: associateReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
