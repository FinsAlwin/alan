import { GET_EDIT_ITEM } from "../actions/types.js";

const initialState = {
  itemOne: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EDIT_ITEM:
      return {
        ...state,
        itemOne: action.payload,
      };

    default:
      return state;
  }
}
