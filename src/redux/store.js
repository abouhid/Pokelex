import { combineReducers, createStore } from "redux";
import dataFetchReducer from "./reducers/dataFetchReducer";
import changeReducer from "./reducers/changeReducer";

const reducers = combineReducers({
  dataFetchReducer,
  changeReducer,
});

const store = createStore(reducers);
export default store;
