import { START_FETCHING_PARTICIPANTS, SUCCESS_FETCHING_PARTICIPANTS, ERROR_FETCHING_PARTICIPANTS, SET_KEYWORD_PARTICIPANTS } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PARTICIPANTS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_PARTICIPANTS:
      return { ...state, status: statusList.success, data: action.participants };

    case ERROR_FETCHING_PARTICIPANTS:
      return { ...state, status: statusList.error };

    case SET_KEYWORD_PARTICIPANTS:
      return { ...state, keyword: action.keyword };

    default:
      return state;
  }
}
