import { createStore, compose, applyMiddleware } from "redux";
import combineReducers from "../reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const store = createStore(
  combineReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
