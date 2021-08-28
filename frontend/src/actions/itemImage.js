import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfigForm, tokenConfig } from "./auth";
import {
  ADD_ITEM_IMG,
  GET_ITEM_IMG,
  EDIT_ITEM_IMG,
  GET_EDIT_ITEM_IMG,
  DELETE_ITEM_IMG,
} from "./types";

// ADD Category
export const addItemImg = (data) => (dispatch, getState) => {
  axios
    .post("/common/api/itemsimage/", data, tokenConfigForm(getState))
    .then((res) => {
      dispatch(createMessage({ addItemImg: "image Added" }));
      dispatch({
        type: ADD_ITEM_IMG,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET CATEGORY
export const getItemImg = () => (dispatch, getState) => {
  axios
    .get("common/api/itemsimage", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ITEM_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET_EDIT_CAT
export const getItemImgItem = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/itemsimage/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_ITEM_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//EDIT_CAT
export const editItemImg = (id, data) => (dispatch, getState) => {
  axios
    .patch(`common/api/itemsimage/${id}/`, data, tokenConfigForm(getState))
    .then((res) => {
      dispatch({
        type: EDIT_ITEM_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE CATEGORY
export const deleteItemImg = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/itemsimage/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItemImg: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEM_IMG,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
