import {
  ADD_ITEM_IMG,
  GET_ITEM_IMG,
  EDIT_ITEM_IMG,
  GET_EDIT_ITEM_IMG,
  DELETE_ITEM_IMG,
} from "../actions/types";

const initialState = {
  itemImg: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_IMG:
      return {
        ...state,
        itemImg: action.payload,
      };
    case ADD_ITEM_IMG:
      return {
        ...state,
        itemImg: [...state.itemImg, action.payload],
      };
    case EDIT_ITEM_IMG:
      return {
        ...state,
        itemImg: [...state.itemImg, action.payload],
      };
    case DELETE_ITEM_IMG:
      return {
        ...state,
        itemImg: state.itemImg.filter(
          (itemImg) => itemImg.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
