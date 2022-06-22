import { START_FETCH_CATEGORIES, SUCCESS_FETCH_CATEGORIES, ERROR_FETCH_CATEGORIES, SET_PAGE } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], page: 1, limit: 2, pages: 1, status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCH_CATEGORIES:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCH_CATEGORIES:
      return { ...state, status: statusList.success, data: action.categories, pages: action.pages };

    case ERROR_FETCH_CATEGORIES:
      return { ...state, status: statusList.error };

    case SET_PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
}
