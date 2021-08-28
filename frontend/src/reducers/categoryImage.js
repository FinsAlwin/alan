import {
  ADD_CATEGORY_IMG,
  GET_CATEGORY_IMG,
  EDIT_CAT_IMG,
  GET_EDIT_CAT_IMG,
  DELETE_CATEGORY_IMG,
} from "../actions/types.js";

const initialState = {
  categoryImg: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_IMG:
      return {
        ...state,
        categoryImg: action.payload,
      };
    case ADD_CATEGORY_IMG:
      return {
        ...state,
        categoryImg: [...state.categoryImg, action.payload],
      };
    case EDIT_CAT_IMG:
      return {
        ...state,
        categoryImg: [...state.categoryImg, action.payload],
      };
    case DELETE_CATEGORY_IMG:
      return {
        ...state,
        categoryImg: state.categoryImg.filter(
          (categoryImg) => categoryImg.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
