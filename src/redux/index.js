//
/*eslint-disable */
import { combineReducers, createStore } from "redux";
import dataFetchReducer from "./reducers/dataFetchReducer";

const reducers = combineReducers({
  dataFetchReducer,
});

const store = createStore(reducers);
export default store;
