import { STORE_ITEMS } from "../actions/coordinate";
import { initialState } from "./initialState";

const searchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ITEMS: {
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
