import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfigForm, tokenConfig } from "./auth";
import {
  ADD_TABLE_IMG,
  GET_TABLE_IMG,
  EDIT_TABLE_IMG,
  GET_EDIT_TABLE_IMG,
  DELETE_TABLE_IMG,
} from "./types";

// ADD Category
export const addTableImg = (data) => (dispatch, getState) => {
  axios
    .post("/common/api/tablesimage/", data, tokenConfigForm(getState))
    .then((res) => {
      dispatch(createMessage({ addTableImg: "Image Added" }));
      dispatch({
        type: ADD_TABLE_IMG,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET CATEGORY
export const getTableImg = () => (dispatch, getState) => {
  axios
    .get("common/api/tablesimage", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TABLE_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET_EDIT_CAT
export const getTableImgItem = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/tablesimage/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_TABLE_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//EDIT_CAT
export const editTableImg = (id, data) => (dispatch, getState) => {
  axios
    .patch(`common/api/tablesimage/${id}/`, data, tokenConfigForm(getState))
    .then((res) => {
      dispatch({
        type: EDIT_TABLE_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE CATEGORY
export const deleteTableImg = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/tablesimage/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteTableImg: "Table Deleted" }));
      dispatch({
        type: DELETE_TABLE_IMG,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
