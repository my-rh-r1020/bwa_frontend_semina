import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import notifReducer from "./notif/reducer";
import categoriesReducer from "./categories/reducer";
import speakersReducer from "./speakers/reducers";
import eventsReducer from "./events/reducer";
import listsReducer from "./lists/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    auth: authReducer,
    notif: notifReducer,
    categories: categoriesReducer,
    speakers: speakersReducer,
    events: eventsReducer,
    lists: listsReducer,
  }),
  store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
