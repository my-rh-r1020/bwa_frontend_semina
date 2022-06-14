import { START_FETCHING_EVENTS, SUCCESS_FETCHING_EVENTS, ERROR_FETCHING_EVENTS, SET_KEYWORD_EVENTS } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_EVENTS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_EVENTS:
      return { ...state, status: statusList.success, data: action.events };

    case ERROR_FETCHING_EVENTS:
      return { ...state, status: statusList.error };

    case SET_KEYWORD_EVENTS:
      return { ...state, status: action.keyword };

    default:
      return state;
  }
}
