import { START_FETCHING_EVENTS, SUCCESS_FETCHING_EVENTS, ERROR_FETCHING_EVENTS, SET_KEYWORD_EVENTS, SET_CATEGORY, SET_SPEAKER } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchEvents = debounce(getData, 1000);

// Start Fetching Data
export const startFetchingEvents = () => {
  return { type: START_FETCHING_EVENTS };
};

// Success Fetching Data
export const successFetchingEvents = ({ events }) => {
  return { type: SUCCESS_FETCHING_EVENTS, events };
};

// Error Fetching Data
export const errorFetchingEvents = () => {
  return { type: ERROR_FETCHING_EVENTS };
};

// Fetching Data
export const fetchEvents = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingEvents());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      // Set Filter / Keyword
      let params = { keyword: getState().events.keyword, category: getState().events?.category?.value || "", speaker: getState().events?.speaker?.value || "" };

      let res = await debouncedFetchEvents("api/v1/events", params);

      res.data.data.forEach((res) => {
        res.categoryName = res?.category?.name ?? "";
        res.speakerName = res?.speaker?.name ?? "-";
      });

      dispatch(successFetchingEvents({ events: res.data.data }));
    } catch (err) {
      dispatch(errorFetchingEvents());
    }
  };
};

// Keywords
export const setKeyword = (keyword) => {
  return { type: SET_KEYWORD_EVENTS, keyword };
};

// Category
export const setCategory = (category) => {
  return { type: SET_CATEGORY, category };
};

// Speaker
export const setSpeaker = (speaker) => {
  return { type: SET_SPEAKER, speaker };
};
