import { START_FETCHING_EVENTS, SUCCESS_FETCHING_EVENTS, ERROR_FETCHING_EVENTS, SET_KEYWORD_EVENTS, SET_CATEGORY, SET_SPEAKER } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", category: "", speaker: "", status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_EVENTS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_EVENTS:
      return { ...state, status: statusList.success, data: action.events };

    case ERROR_FETCHING_EVENTS:
      return { ...state, status: statusList.error };

    case SET_KEYWORD_EVENTS:
      return { ...state, keyword: action.keyword };

    case SET_CATEGORY:
      return { ...state, category: statusList.category };

    case SET_SPEAKER:
      return { ...state, speaker: statusList.speaker };

    default:
      return state;
  }
}
