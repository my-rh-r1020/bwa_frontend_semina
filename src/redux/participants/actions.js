import { START_FETCHING_PARTICIPANTS, SUCCESS_FETCHING_PARTICIPANTS, ERROR_FETCHING_PARTICIPANTS, SET_KEYWORD_PARTICIPANTS } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchParticipants = debounce(getData, 1000);

// Start Fetching Data
export const startFetchingParticipants = () => {
  return { type: START_FETCHING_PARTICIPANTS };
};

// Success Fetching Data
export const successFetchingParticipants = ({ participants }) => {
  return { type: SUCCESS_FETCHING_PARTICIPANTS, participants };
};

// Error Fetching Data
export const errorFetchingParticipants = () => {
  return { type: ERROR_FETCHING_PARTICIPANTS };
};

// Fetching Data
export const fetchParticipants = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingParticipants());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      // Set Filter / Keyword
      let params = { keyword: getState().participants.keyword };

      let res = await debouncedFetchParticipants("api/v1/participants", params);

      dispatch(successFetchingParticipants({ participants: res.data.data }));
    } catch (err) {
      dispatch(errorFetchingParticipants());
    }
  };
};

// Set Keyword
export const setKeyword = (keyword) => {
  return { type: SET_KEYWORD_PARTICIPANTS, keyword };
};
