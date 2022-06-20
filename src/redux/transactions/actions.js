import { START_FETCHING_TRANSACTIONS, SUCCESS_FETCHING_TRANSACTIONS, ERROR_FETCHING_TRANSACTIONS, SET_KEYWORD_TRANSACTIONS, SET_DATE, SET_PAGE } from "./constants";

import debounce from "debounce-promise";
import { getData } from "../../utils/fetchData";
import { clearNotif } from "../notif/actions";

let debouncedFetchTransactions = debounce(getData, 1000);

// Start Fetching Data
export const startFetchingTransactions = () => {
  return { type: START_FETCHING_TRANSACTIONS };
};

// Success Fetching Data
export const successFetchingTransactions = ({ transactions, pages }) => {
  return { type: SUCCESS_FETCHING_TRANSACTIONS, transactions, pages };
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
      let params = {
        keyword: getState().transactions.keyword,
        event: getState().transactions.event,
        page: getState().transactions?.page || 1,
        limit: getState().transactions?.limit || 10,
        // startDate: getState().transactions?.date.startDate,
        // endDate: getState().transactions?.date.endDate,
      };

      let res = await debouncedFetchTransactions("api/v1/transactions", params);

      const _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({ name: `${res.personalDetail.firstName} ${res.personalDetail.lastName}`, email: res.personalDetail.email, title: res.historyEvent.title, date: res.historyEvent.date, venueName: res.historyEvent.venueName });
      });

      dispatch(successFetchingTransactions({ transactions: _temp, pages: res.data.pages }));
    } catch (err) {
      dispatch(errorFetchingTransactions());
    }
  };
};

// Keywords
export const setKeyword = (keyword) => {
  return { type: SET_KEYWORD_TRANSACTIONS, keyword };
};

// Date
export const setDate = (date) => {
  return { type: SET_DATE, date };
};

// Page
export const setPage = (page) => {
  return { type: SET_PAGE, page };
};
