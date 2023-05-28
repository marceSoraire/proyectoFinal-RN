import { createStore, combineReducers } from "redux";

import { disciplinesReducer, categoryReducer } from "./reducers";

const rootReducer = combineReducers({
  disciplines: disciplinesReducer,
  categorys: categoryReducer,
});

export default createStore(rootReducer);
