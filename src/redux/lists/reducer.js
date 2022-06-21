import {
  START_FETCHING_LISTS_CATEGORIES,
  SUCCESS_FETCHING_LISTS_CATEGORIES,
  ERROR_FETCHING_LISTS_CATEGORIES,
  START_FETCHING_LISTS_SPEAKERS,
  SUCCESS_FETCHING_LISTS_SPEAKERS,
  ERROR_FETCHING_LISTS_SPEAKERS,
  START_FETCHING_LISTS_EVENTS,
  SUCCESS_FETCHING_LISTS_EVENTS,
  ERROR_FETCHING_LISTS_EVENTS,
} from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { categories: [], statusCategories: statusList.idle, speakers: [], statusSpeakers: statusList.idle, events: [], statusEvents: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // List Categories
    case START_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.process };

    case SUCCESS_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.success, categories: action.categories };

    case ERROR_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.error };

    // List Speakers
    case START_FETCHING_LISTS_SPEAKERS:
      return { ...state, statusSpeakers: statusList.process };

    case SUCCESS_FETCHING_LISTS_SPEAKERS:
      return { ...state, statusSpeakers: statusList.success, speakers: action.speakers };

    case ERROR_FETCHING_LISTS_SPEAKERS:
      return { ...state, statusSpeakers: statusList.error };

    // List Events
    case START_FETCHING_LISTS_EVENTS:
      return { ...state, statusEvents: statusList.process };

    case SUCCESS_FETCHING_LISTS_EVENTS:
      return { ...state, statusEvents: statusList.success, events: action.events };

    case ERROR_FETCHING_LISTS_EVENTS:
      return { ...state, statusEvents: statusList.error };

    default:
      return state;
  }
}
