import { START_FETCHING_SPEAKERS, SUCCESS_FETCHING_SPEAKERS, ERROR_FETCHING_SPEAKERS } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SPEAKERS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_SPEAKERS:
      return { ...state, status: statusList.success, data: action.speakers };

    case ERROR_FETCHING_SPEAKERS:
      return { ...state, status: statusList.error };

    default:
      return state;
  }
}
