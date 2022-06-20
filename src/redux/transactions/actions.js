import { START_FETCHING_TRANSACTIONS, SUCCESS_FETCHING_TRANSACTIONS, ERROR_FETCHING_TRANSACTIONS, SET_KEYWORD_TRANSACTIONS, SET_EVENT, SET_PAYMENT, SET_PARTICIPANT, SET_STARTDATE, SET_ENDDATE } from "./constants";

import debounce from "debounce-promise";
import { getData } from "../../utils/fetchData";
import { clearNotif } from "../notif/actions";

let debouncedFetchTransactions = debounce(getData, 1000);

// Start Fetching Data
export const startFetchingTransactions = () => {
  return { type: START_FETCHING_TRANSACTIONS };
};

// Success Fetching Data
export const successFetchingTransactions = ({ transactions }) => {
  return { type: SUCCESS_FETCHING_TRANSACTIONS, transactions };
};

// Error Fetching Data
export const errorFetchingTransactions = () => {
  return { type: ERROR_FETCHING_TRANSACTIONS };
};

// Fetching Data
export const fetchTransactions = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingTransactions());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      // Set Filter / Keyword
      let params = { keyword: getState().transactions.keyword };

      let res = await debouncedFetchTransactions("api/v1/transactions", params);

      dispatch(successFetchingTransactions({ transactions: res.data.data }));
    } catch (err) {
      dispatch(errorFetchingTransactions());
    }
  };
};

// Keywords
export const setKeyword = (keyword) => {
  return { type: SET_KEYWORD_TRANSACTIONS, keyword };
};

// Event
export const setEvent = (event) => {
  return { type: SET_EVENT, event };
};

// Payment
export const setPayment = (payment) => {
  return { type: SET_PAYMENT, payment };
};

// Participants
export const setParticipant = (participant) => {
  return { type: SET_PARTICIPANT, participant };
};
