import React, { Component, Fragment } from "react";

import { NavLink } from "react-router-dom";
import CategoryIcon from "@material-ui/icons/Category";
import PostAddIcon from "@material-ui/icons/PostAdd";
import TableChartIcon from "@material-ui/icons/TableChart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class TopItems extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="tabs is-centered is-small is-toggle is-toggle-rounded">
          <ul>
            <li>
              <NavLink to="/category" activeClassName="active">
                <span className="icon is-small">
                  <CategoryIcon style={{ color: "#5188f5" }} />
                </span>
                <span>Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/additems" activeClassName="active">
                <span className="icon is-small">
                  <PostAddIcon style={{ color: "#5188f5" }} />
                </span>
                <span>Items</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tables" activeClassName="active">
                <span className="icon is-small">
                  <TableChartIcon style={{ color: "#5188f5" }} />
                </span>
                <span>Tables</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                <span className="icon is-small">
                  <AccountCircleIcon style={{ color: "#5188f5" }} />
                </span>
                <span>Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default TopItems;
