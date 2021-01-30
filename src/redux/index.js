//
/*eslint-disable */
import { combineReducers, createStore } from "redux";
import dataFetchReducer from "./reducers/dataFetchReducer";
import genReducer from "./reducers/genReducer";

const reducers = combineReducers({
  dataFetchReducer,
  genReducer,
});

const store = createStore(reducers);
export default store;
