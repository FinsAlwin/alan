import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfigForm, tokenConfig } from "./auth";
import {
  ADD_CATEGORY_IMG,
  GET_CATEGORY_IMG,
  EDIT_CAT_IMG,
  GET_EDIT_CAT_IMG,
  DELETE_CATEGORY_IMG,
} from "./types";

// ADD Category
export const addCategoryImg = (cat) => (dispatch, getState) => {
  axios
    .post("/common/api/categoryimage/", cat, tokenConfigForm(getState))
    .then((res) => {
      dispatch(createMessage({ addCategoryImg: "Image Added" }));
      dispatch({
        type: ADD_CATEGORY_IMG,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET CATEGORY
export const getCategoryImg = () => (dispatch, getState) => {
  axios
    .get("common/api/categoryimage", tokenConfigForm(getState))
    .then((res) => {
      dispatch({
        type: GET_CATEGORY_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// GET_EDIT_CAT
export const getCategoryImgItem = (id) => (dispatch, getState) => {
  axios
    .get(`common/api/categoryimage/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDIT_CAT_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//EDIT_CAT
export const editCategoryImg = (id, editCat) => (dispatch, getState) => {
  axios
    .patch(
      `common/api/categoryimage/${id}/`,
      editCat,
      tokenConfigForm(getState)
    )
    .then((res) => {
      dispatch(createMessage({ editCategoryImg: "Image Added" }));
      dispatch({
        type: EDIT_CAT_IMG,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE CATEGORY
export const deleteCategoryImg = (id) => (dispatch, getState) => {
  axios
    .delete(`common/api/categoryimage/${id}/`, tokenConfigForm(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCategoryImg: "Image Deleted" }));
      dispatch({
        type: DELETE_CATEGORY_IMG,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
