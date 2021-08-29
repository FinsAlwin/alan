import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { tokenConfig } from "./auth";
import { GET_PROFILE, UPDATED_PROFILE } from "./types";

export const getProfile = () => (dispatch, getState) => {
  axios
    .get("common/api/getprofile", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateProfile = (update) => (dispatch, getState) => {
  axios
    .patch("backend/api/profile", update, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateProfile: "Profile Updated" }));
      dispatch({
        type: UPDATED_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
