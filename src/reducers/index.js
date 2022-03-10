import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Coordinate from "./coordinate";

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  Coordinate,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

export default persistReducer(persistConfig, rootReducer);
