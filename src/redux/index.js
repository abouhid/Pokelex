import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import dataFetchReducer from "./reducers/dataFetchReducer";
import genReducer from "./reducers/genReducer";

const reducers = combineReducers({
  dataFetchReducer,
  genReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
