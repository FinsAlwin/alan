import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig, tokenConfigForm } from "./auth";
import {
  ADD_TABLE,
  EDIT_TABLE,
  DELETE_TABLE,
  GET_EDIT_TABLE,
  GET_TABLE,
} from "./types";

// ADD Category
export const addTable = (tab) => (dispatch, getState) => {
  axios
    .post("/common/api/tables/", tab, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addTable: "Table Added" }));
      dispatch({
        type: ADD_TABLE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET CATEGORY
export const getTable = () => (dispatch, getState) => {
  axios
    .get("common/api/tables", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TABLE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET_EDIT_CAT
export const getTableItem = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/tables/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_TABLE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//EDIT_CAT
export const editTable = (id, editTable) => (dispatch, getState) => {
  axios
    .patch(`common/api/tables/${id}/`, editTable, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ editTable: "Table Updated" }));
      dispatch({
        type: EDIT_TABLE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CATEGORY
export const deleteTable = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/tables/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteTable: "Table Deleted" }));
      dispatch({
        type: DELETE_TABLE,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
