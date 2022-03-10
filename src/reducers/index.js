import { combineReducers } from "redux";
import searchDataReducer from "./searchDataReducer";
import kewordReducer from "./kewordReducer";

const rootReducer = combineReducers({
  searchDataReducer,
  kewordReducer,
});

export default rootReducer;
