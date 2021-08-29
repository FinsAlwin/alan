import { GET_TYPE } from "../actions/types.js";

const initialState = {
  type: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
}
