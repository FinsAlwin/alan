import { GET_PROFILE, UPDATED_PROFILE } from "../actions/types.js";

const initialState = {
  profile: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATED_PROFILE:
      return {
        ...state,
        profile: [...state.profile, action.profile],
      };

    default:
      return state;
  }
}
