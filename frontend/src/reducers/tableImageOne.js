import { GET_EDIT_TABLE_IMG } from "../actions/types.js";

const initialState = {
  tableImgOne: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_TABLE_IMG:
      return {
        ...state,
        tableImgOne: action.payload,
      };

    default:
      return state;
  }
}
