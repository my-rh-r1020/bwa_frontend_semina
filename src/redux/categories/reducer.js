import { START_FETCH_CATEGORIES, SUCCESS_FETCH_CATEGORIES, ERROR_FETCH_CATEGORIES } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" };

const initialState = { data: [], status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH_CATEGORIES:
      return { ...state, status: statusList.process };

    case ERROR_FETCH_CATEGORIES:
      return { ...state, status: statusList.error };

    case SUCCESS_FETCH_CATEGORIES:
      return { ...state, status: statusList.success, data: action.categories };

    default:
      return state;
  }
}
