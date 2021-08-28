import { GET_EDIT_CAT_IMG } from "../actions/types.js";

const initialState = {
  categoryImgitem: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_CAT_IMG:
      return {
        ...state,
        categoryItem: action.payload,
      };

    default:
      return state;
  }
}
