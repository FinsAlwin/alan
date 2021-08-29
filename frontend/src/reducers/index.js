import { combineReducers } from "redux";
import auth from "./auth";
import category from "./category";
import categoryItem from "./categoryItem";
import items from "./items";
import itemOne from "./itemOne";
import tables from "./tables";
import tablesOne from "./tableOne";
import categoryImg from "./categoryImage";
import categoryImgitem from "./categoryImageItem";
import itemImg from "./itemImage";
import itemImgitem from "./itemImageOne";
import errors from "./errors";
import messages from "./messages";
import tableImg from "./tableImage";
import tableImgOne from "./tableImageOne";
import profile from "./profile";
import type from "./typeOf";
import updateprofile from "./updateProfile";

export default combineReducers({
  messages,
  errors,
  auth,
  category,
  categoryItem,
  items,
  itemOne,
  tables,
  tablesOne,
  categoryImg,
  categoryImgitem,
  itemImg,
  itemImgitem,
  tableImg,
  tableImgOne,
  profile,
  type,
  updateprofile,
});
