import { KEY_DOWN } from "../actions/coordinate";
import { initialState } from "./initialState";

const kewordReducer = (state = initialState, action) => {
  switch (action.type) {
    case KEY_DOWN: {
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
