import { START_FETCHING_TRANSACTIONS, SUCCESS_FETCHING_TRANSACTIONS, ERROR_FETCHING_TRANSACTIONS, SET_KEYWORD_TRANSACTIONS, SET_EVENT, SET_PAGE } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", event: "", page: 1, limit: 10, pages: 1, date: { startDate: new Date(), endDate: new Date() }, status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.success, data: action.transactions, pages: action.pages };

    case ERROR_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.error };

    case SET_KEYWORD_TRANSACTIONS:
      return { ...state, keyword: action.keyword };

    case SET_EVENT:
      return { ...state, event: action.event };

    case SET_PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
}
