import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    auth: authReducer,
  }),
  store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
