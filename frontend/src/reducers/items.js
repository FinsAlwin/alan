import {
  GET_ITEMS,
  ADD_ITEMS,
  EDIT_ITEMS,
  DELETE_ITEMS,
} from "../actions/types.js";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
}
