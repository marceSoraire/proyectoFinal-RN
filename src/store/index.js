import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  disciplinesReducer,
  categoryReducer,
  cartReducer,
  sportsReducer,
  authReducer,
} from "./reducers";

const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  categorys: categoryReducer,
  cart: cartReducer,
  sports: sportsReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
