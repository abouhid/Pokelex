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
let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
