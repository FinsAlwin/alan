import { GET_EDIT_ITEM_IMG } from "../actions/types.js";

const initialState = {
  itemImgitem: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_ITEM_IMG:
      return {
        ...state,
        itemImgitem: action.payload,
      };

    default:
      return state;
  }
}
