import { combineReducers } from "redux";
import kewordReducer from "./kewordReducer";
import searchDataReducer from "./searchDataReducer";

const rootReducer = combineReducers({
  searchDataReducer,
  kewordReducer,
});

export default rootReducer;
