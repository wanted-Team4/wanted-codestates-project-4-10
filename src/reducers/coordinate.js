import { coordinateDummy } from '../initalState';
import * as Constants from '../constants';

const reducer = (state = coordinateDummy, action) => {
  switch (action.type) {
    case Constants.ADD_COORDINATE:
      return {
        coordinate: [],
      };
    case Constants.UPDATE_COORDINATE:
      return {
        coordinate: [],
      };
    case Constants.DELETE_COORDINATE:
      return {
        coordinate: [],
      };
    default:
      return state;
  }
};

export default reducer;
