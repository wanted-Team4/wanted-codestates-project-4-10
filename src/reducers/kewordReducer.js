import { SET_KEYWORD } from "../actions/coordinate";
import { initialState } from "./initialState";

const kewordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD: {
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    }
    default:
      return state;
  }
};

export default kewordReducer;
