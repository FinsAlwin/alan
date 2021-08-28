import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig, tokenConfigForm } from "./auth";
import {
  GET_ITEMS,
  ADD_ITEMS,
  EDIT_ITEMS,
  DELETE_ITEMS,
  GET_EDIT_ITEM,
} from "./types";

// ADD_ITEMS
export const addItems = (cat) => (dispatch, getState) => {
  axios
    .post("/common/api/items/", cat, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItems: "Item Added" }));
      dispatch({
        type: ADD_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET_ITEMS
export const getItems = () => (dispatch, getState) => {
  axios
    .get("common/api/items", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// EDIT_ITEMS
export const editItems = (id, editItem) => (dispatch, getState) => {
  axios
    .patch(`common/api/items/${id}/`, editItem, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ editItems: "Item updated" }));
      dispatch({
        type: EDIT_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET_EDIT_CAT
export const getItemOne = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/items/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE CATEGORY
export const deleteItems = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/items/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItems: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEMS,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
