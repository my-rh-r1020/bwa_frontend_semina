import { START_FETCHING_LISTS_CATEGORIES, SUCCESS_FETCHING_LISTS_CATEGORIES, ERROR_FETCHING_LISTS_CATEGORIES } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { categories: [], statusCategories: statusList.idle, speakers: [], statusSpeakers: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.process };

    case SUCCESS_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.success, categories: action.categories };

    case ERROR_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statusList.error };

    default:
      return state;
  }
}
