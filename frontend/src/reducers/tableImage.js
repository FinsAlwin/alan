import {
  ADD_TABLE_IMG,
  GET_TABLE_IMG,
  EDIT_TABLE_IMG,
  DELETE_TABLE_IMG,
} from "../actions/types";

const initialState = {
  tableImg: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_IMG:
      return {
        ...state,
        tableImg: action.payload,
      };
    case ADD_TABLE_IMG:
      return {
        ...state,
        tableImg: [...state.tableImg, action.payload],
      };
    case EDIT_TABLE_IMG:
      return {
        ...state,
        tableImg: [...state.tableImg, action.payload],
      };
    case DELETE_TABLE_IMG:
      return {
        ...state,
        tableImg: state.tableImg.filter(
          (tableImg) => tableImg.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
