import { GET_EDIT_CAT } from "../actions/types.js";

const initialState = {
  categoryItem: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_CAT:
      return {
        ...state,
        categoryItem: action.payload,
      };

    default:
      return state;
  }
}
