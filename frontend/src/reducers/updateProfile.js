import { UPDATED_PROFILE } from "../actions/types.js";

const initialState = {
  updateprofile: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATED_PROFILE:
      return {
        ...state,
        updateprofile: [...state.updateprofile, action.updateprofile],
      };

    default:
      return state;
  }
}
