import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TYPE } from "./types";

export const getType = () => (dispatch, getState) => {
  axios
    .get("common/api/type", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TYPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
