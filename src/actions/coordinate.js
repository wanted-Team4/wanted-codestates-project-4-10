import axios from "axios";
export const SET_ITEMS = "SET_ITEMS";
export const SET_KEYWORD = "SET_KEYWORD";

const BASE_URL = process.env.REACT_APP_SEARCH_API;
const ONE_MINUTE = 1000 * 60;

export const search = (value) => async (dispatch) => {
  try {
    const URL = `${BASE_URL}search-conditions/?name=${value}`;
    const items = await axios.get(URL);
    const object = items.data.slice(0, 10)
    // const object = {
    //   data: items.data.slice(0, 10),
    //   expireTime: new Date().getTime() + ONE_MINUTE,
    // };
    localStorage.setItem(value, JSON.stringify(object));
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
