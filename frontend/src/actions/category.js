import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { tokenConfig, tokenConfigForm } from "./auth";
import {
  GET_CATEGORY,
  ADD_CATEGORY,
  GET_EDIT_CAT,
  EDIT_CAT,
  DELETE_CATEGORY,
} from "./types";

// ADD Category
export const addCategory = (cat) => (dispatch, getState) => {
  axios
    .post("/common/api/category/", cat, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCategory: "Category Added" }));
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET CATEGORY
export const getCategory = () => (dispatch, getState) => {
  axios
    .get("common/api/category", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET_EDIT_CAT
export const getCategoryItem = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/category/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_CAT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//EDIT_CAT
export const editCategory = (id, editCat) => (dispatch, getState) => {
  axios
    .patch(`common/api/category/${id}/`, editCat, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ editCategory: "Category Edited" }));
      dispatch({
        type: EDIT_CAT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CATEGORY
export const deleteCategory = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/category/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCategory: "Category Deleted" }));
      dispatch({
        type: DELETE_CATEGORY,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
