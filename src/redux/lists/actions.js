import { START_FETCHING_LISTS_CATEGORIES, SUCCESS_FETCHING_LISTS_CATEGORIES, ERROR_FETCHING_LISTS_CATEGORIES } from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";

let debouncedFetchLists = debounce(getData, 1000);

// Start Fecthing Data
export const startFetchingListCategories = () => {
  return { type: START_FETCHING_LISTS_CATEGORIES };
};

// Success Fetching Data
export const successFetchingListCategories = ({ categories }) => {
  return { type: SUCCESS_FETCHING_LISTS_CATEGORIES, categories };
};

// Error Fetching Data
export const errorFetchingListCategories = () => {
  return { type: ERROR_FETCHING_LISTS_CATEGORIES };
};

// Fetching Data
export const fetchListCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingListCategories());
    try {
      // Debounce Categories API
      let res = await debouncedFetchLists("api/v1/categories"),
        _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({ value: res._id, label: res.name, target: { value: res._id, name: "category" } });
      });

      dispatch(successFetchingListCategories({ categories: _temp }));
    } catch (err) {
      dispatch(errorFetchingListCategories());
    }
  };
};
