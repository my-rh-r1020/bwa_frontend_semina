import { START_FETCHING_SPEAKERS, SUCCESS_FETCHING_SPEAKERS, ERROR_FETCHING_SPEAKERS } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debounceFetchSpeakers = debounce(getData, 1000);

// Start Fecthing Data
export const startFetchingSpeakers = () => {
  return { type: START_FETCHING_SPEAKERS };
};

// Success Fetching Data
export const successFetchingSpeakers = ({ speakers }) => {
  return { type: SUCCESS_FETCHING_SPEAKERS, speakers };
};

// Error Fetching Data
export const errorFetchingSpeakers = () => {
  return { type: ERROR_FETCHING_SPEAKERS };
};

// Fetching Data
export const fetchSpeakers = () => {
  return async (dispatch) => {
    dispatch(startFetchingSpeakers());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debounceFetchSpeakers("api/v1/speakers");

      dispatch(successFetchingSpeakers({ speakers: res.data.data }));
    } catch (error) {
      dispatch(errorFetchingSpeakers());
    }
  };
};
