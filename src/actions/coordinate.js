import * as Constants from "../constants";

export const addCoordinateAction = (data) => {
  return {
    type: Constants.ADD_COORDINATE,
    data,
  };
};

export const updateCoordinateAction = (data) => {
  return {
    type: Constants.UPDATE_COORDINATE,
    data,
  };
};

export const deleteCoordinateAction = (id) => {
  return {
    type: Constants.DELETE_COORDINATE,
    id,
  };
};
