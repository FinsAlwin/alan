import {
  GET_TABLE,
  ADD_TABLE,
  EDIT_TABLE,
  DELETE_TABLE,
} from "../actions/types.js";

const initialState = {
  tables: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TABLE:
      return {
        ...state,
        tables: action.payload,
      };
    case ADD_TABLE:
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    case EDIT_TABLE:
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    case DELETE_TABLE:
      return {
        ...state,
        tables: state.tables.filter((tables) => tables.id !== action.payload),
      };
    default:
      return state;
  }
}
