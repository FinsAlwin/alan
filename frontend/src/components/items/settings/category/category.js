import React, { Component, Fragment } from "react";

import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import PermMediaIcon from "@material-ui/icons/PermMedia";

import AddCategory from "./addCategory";
import EditCategory from "./EditCategory";
import CategoryList from "./categoryList";
import EditCatItem from "./editCatItem";
import CategoryImage from "./categoryImage";
import CatImgItem from "./catImgItem";

import TopNav from "../topNav";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      AddCategoryItem: true,
      EditCategoryItem: false,
      CategoryListItem: true,
      EditCatItemOne: false,
      categoryImageItem: false,
      categoryImageItemOne: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    switch (varname) {
      case "AddCategoryItem":
        this.setState({
          AddCategoryItem: true,
          EditCategoryItem: false,
          CategoryListItem: true,
          EditCatItemOne: false,
          categoryImageItem: false,
          categoryImageItemOne: false,
        });
        break;
      case "EditCategoryItem":
        this.setState({
          AddCategoryItem: false,
          EditCategoryItem: true,
          CategoryListItem: false,
          EditCatItemOne: true,
          categoryImageItem: false,
          categoryImageItemOne: false,
        });
        break;
      case "categoryImageItem":
        this.setState({
          AddCategoryItem: false,
          EditCategoryItem: false,
          CategoryListItem: false,
          EditCatItemOne: false,
          categoryImageItem: true,
          categoryImageItemOne: true,
        });
        break;

      default:
        return;
    }
  }
  render() {
    const {
      AddCategoryItem,
      EditCategoryItem,
      CategoryListItem,
      EditCatItemOne,
      categoryImageItem,
      categoryImageItemOne,
    } = this.state;
    return (
      <Fragment>
        <TopNav />
        <div className="container is-widescreen">
          <div className="gridContainer">
            <div className="columns">
              <div className="column is-6">
                <div className="tabs is-centered">
                  <ul>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="#"
                        onClick={() => this.hideComponent("AddCategoryItem")}
                      >
                        <span className="icon is-small">
                          <AddIcon />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="#"
                        onClick={() => this.hideComponent("EditCategoryItem")}
                      >
                        <span className="icon is-small">
                          <EditIcon />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="#"
                        onClick={() => this.hideComponent("categoryImageItem")}
                      >
                        <span className="icon is-small">
                          <PermMediaIcon />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {AddCategoryItem && <AddCategory />}

                {EditCategoryItem && <EditCategory />}

                {categoryImageItem && <CategoryImage />}
              </div>
              <div className="column is-6">
                <div
                  className="container is-widescreen"
                  style={{ marginTop: "50px" }}
                >
                  {CategoryListItem && <CategoryList />}
                  {EditCatItemOne && <EditCatItem />}
                  {categoryImageItemOne && <CatImgItem />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Category;
