import axios from "axios";
export const SET_ITEMS = "SET_ITEMS";
export const SET_KEYWORD = "SET_KEYWORD";

const BASE_URL = process.env.REACT_APP_SEARCH_API;

export const search = (value) => async (dispatch) => {
  try {
    const URL = `${BASE_URL}search-conditions/?name=${value}`;
    const items = await axios.get(URL);
    dispatch(setItems(items.data.slice(0, 10)));
  } catch (err) {
    console.log(err);
  }
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    payload: {
      items,
    },
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: {
      keyword,
    },
  };
};
