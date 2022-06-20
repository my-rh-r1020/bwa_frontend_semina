import { START_FETCHING_TRANSACTIONS, SUCCESS_FETCHING_TRANSACTIONS, ERROR_FETCHING_TRANSACTIONS, SET_KEYWORD_TRANSACTIONS, SET_EVENT, SET_PAYMENT, SET_PARTICIPANT, SET_STARTDATE, SET_ENDDATE } from "./constants";

const statusList = { idle: "idle", process: "process", success: "success", error: "error" },
  initialState = { data: [], keyword: "", event: "", payment: "", participant: "", startDate: "", endDate: "", status: statusList.idle };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.process };

    case SUCCESS_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.success, data: action.transactions };

    case ERROR_FETCHING_TRANSACTIONS:
      return { ...state, status: statusList.error };

    case SET_KEYWORD_TRANSACTIONS:
      return { ...state, keyword: action.keyword };

    case SET_EVENT:
      return { ...state, event: action.event };

    case SET_PAYMENT:
      return { ...state, payment: action.payment };

    case SET_PARTICIPANT:
      return { ...state, participant: action.participant };

    default:
      return state;
  }
}
