import {
  START_FETCHING_LISTS_CATEGORIES,
  SUCCESS_FETCHING_LISTS_CATEGORIES,
  ERROR_FETCHING_LISTS_CATEGORIES,
  START_FETCHING_LISTS_SPEAKERS,
  SUCCESS_FETCHING_LISTS_SPEAKERS,
  ERROR_FETCHING_LISTS_SPEAKERS,
  START_FETCHING_LISTS_EVENTS,
  SUCCESS_FETCHING_LISTS_EVENTS,
  ERROR_FETCHING_LISTS_EVENTS,
} from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";

let debouncedFetchListsCategories = debounce(getData, 1000),
  debouncedFetchListsSpeakers = debounce(getData, 1000),
  debouncedFetchListsEvents = debounce(getData, 1000);

// Start Fetching List Categories
export const startFetchingListCategories = () => {
  return { type: START_FETCHING_LISTS_CATEGORIES };
};

// Success Fetching List Categories
export const successFetchingListCategories = ({ categories }) => {
  return { type: SUCCESS_FETCHING_LISTS_CATEGORIES, categories };
};

// Error Fetching List Categories
export const errorFetchingListCategories = () => {
  return { type: ERROR_FETCHING_LISTS_CATEGORIES };
};

// Fetching List Categories
export const fetchListCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingListCategories());
    try {
      // Debounce Categories API
      let res = await debouncedFetchListsCategories("api/v1/categories"),
        _temp = [];

      // Convert to Objek Data
      res.data.data.forEach((res) => {
        _temp.push({ value: res._id, label: res.name, target: { value: res._id, name: "category" } });
      });

      dispatch(successFetchingListCategories({ categories: _temp }));
    } catch (err) {
      dispatch(errorFetchingListCategories());
    }
  };
};

// ================================================================================================================

// Start Fecthing List Speakers
export const startFetchingListSpeakers = () => {
  return { type: START_FETCHING_LISTS_SPEAKERS };
};

// Success Fetching List Speakers
export const successFetchingListSpeakers = ({ speakers }) => {
  return { type: SUCCESS_FETCHING_LISTS_SPEAKERS, speakers };
};

// Error Fetching List Speakers
export const errorFetchingListSpeakers = () => {
  return { type: ERROR_FETCHING_LISTS_SPEAKERS };
};

// Fetching List Speakers
export const fetchListSpeakers = () => {
  return async (dispatch) => {
    dispatch(startFetchingListSpeakers());
    try {
      // Debounce Speakers API
      let res = await debouncedFetchListsSpeakers("api/v1/speakers"),
        _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({ value: res._id, label: res.name, target: { value: res._id, name: "speaker" } });
      });

      dispatch(successFetchingListSpeakers({ speakers: _temp }));
    } catch (err) {
      dispatch(errorFetchingListSpeakers());
    }
  };
};

// ================================================================================================================

// Start Fecthing List Events
export const startFetchingListEvents = () => {
  return { type: START_FETCHING_LISTS_EVENTS };
};

// Success Fecthing List Events
export const successFetchingListEvents = ({ events }) => {
  return { type: SUCCESS_FETCHING_LISTS_EVENTS, events };
};

// Error Fecthing List Events
export const errorFetchingListEvents = () => {
  return { type: ERROR_FETCHING_LISTS_EVENTS };
};

// Fecthing List Events
export const fetchListEvents = () => {
  return async (dispatch) => {
    dispatch(startFetchingListEvents());
    try {
      // Debounce Events API
      let res = await debouncedFetchListsEvents("api/v1/events"),
        _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({ value: res._id, label: res.title, target: { value: res._id, name: "event" } });
      });

      dispatch(successFetchingListEvents({ events: _temp }));
    } catch (err) {
      dispatch(errorFetchingListEvents());
    }
  };
};
