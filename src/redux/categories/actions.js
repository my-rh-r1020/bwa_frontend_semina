import { START_FETCH_CATEGORIES, SUCCESS_FETCH_CATEGORIES, ERROR_FETCH_CATEGORIES, SET_PAGE } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchCategories = debounce(getData, 1000);

// Start Fecthing Data
export const startFetchingCategories = () => {
  return { type: START_FETCH_CATEGORIES };
};

// Success Fetching Data
export const successFetchingCategories = ({ categories, pages }) => {
  return { type: SUCCESS_FETCH_CATEGORIES, categories, pages };
};

// Error Fetching Data
export const errorFetchingCategories = () => {
  return { type: ERROR_FETCH_CATEGORIES };
};

// Fetch Categories
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCategories());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      // Set Pagination
      let params = { page: getState().categories?.page || 1, limit: getState().categories?.limit || 10 };

      let res = await debouncedFetchCategories("api/v1/categories", params);

      dispatch(successFetchingCategories({ categories: res.data.data, pages: res.data.pages }));
    } catch (error) {
      dispatch(errorFetchingCategories());
    }
  };
};

// Page
export const setPage = (page) => {
  return { type: SET_PAGE, page };
};
