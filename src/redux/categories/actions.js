import { START_FETCH_CATEGORIES, SUCCESS_FETCH_CATEGORIES, ERROR_FETCH_CATEGORIES } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchCategories = debounce(getData, 1000);

// Start Fecthing Data
export const startFetchingCategories = () => {
  return {
    type: START_FETCH_CATEGORIES,
  };
};

// Success Fetching Data
export const successFetchingCategories = ({ categories }) => {
  return { type: SUCCESS_FETCH_CATEGORIES, categories };
};

// Error Fetching Data
export const errorFetchingCategories = () => {
  return {
    type: ERROR_FETCH_CATEGORIES,
  };
};

// Fetch Categories
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingCategories());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchCategories("api/v1/categories");

      dispatch(successFetchingCategories({ categories: res.data.data }));
    } catch (error) {
      dispatch(errorFetchingCategories());
    }
  };
};
