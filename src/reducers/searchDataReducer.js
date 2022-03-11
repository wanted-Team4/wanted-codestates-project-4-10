import { SET_ITEMS } from "../actions/index";
import { initialState } from "./initialState";

const searchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    default:
      return state;
  }
};

export default searchDataReducer;
