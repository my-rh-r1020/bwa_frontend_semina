import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import speakersReducer from "./speakers/reducers";
import notifReducer from "./notif/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    speakers: speakersReducer,
    notif: notifReducer,
  }),
  store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
