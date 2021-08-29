import { GET_EDIT_TABLE } from "../actions/types.js";

const initialState = {
  tablesOne: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_TABLE:
      return {
        ...state,
        tablesOne: action.payload,
      };

    default:
      return state;
  }
}
