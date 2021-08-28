import React, { Component, Fragment } from "react";
import TopNav from "../topNav";

import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import PermMediaIcon from "@material-ui/icons/PermMedia";

import AddTables from "./addTables";
import EditTable from "./editTable";
import TableList from "./tableList";
import EditTableItem from "./editTableItem";
import TableImage from "./tableImage";
import TableImageItem from "./tableImageItem";

class Tables extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      AddTabletem: true,
      EditTableItems: false,
      TableListItem: true,
      EditTableItemOne: false,
      TableImageItems: false,
      TableImageItemOne: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    switch (varname) {
      case "AddTabletem":
        this.setState({
          AddTabletem: true,
          EditTableItems: false,
          TableListItem: true,
          EditCatItemOne: false,
          TableImageItems: false,
          TableImageItemOne: false,
        });
        break;
      case "EditTableItems":
        this.setState({
          AddTabletem: false,
          EditTableItems: true,
          TableListItem: false,
          EditTableItemOne: true,
          TableImageItems: false,
          TableImageItemOne: false,
        });
        break;
      case "TableImageItems":
        this.setState({
          AddTabletem: false,
          EditTableItems: false,
          TableListItem: false,
          EditTableItemOne: false,
          TableImageItems: true,
          TableImageItemOne: true,
        });
        break;

      default:
        return;
    }
  }
  render() {
    const {
      AddTabletem,
      EditTableItems,
      TableListItem,
      EditTableItemOne,
      TableImageItems,
      TableImageItemOne,
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
                        onClick={() => this.hideComponent("AddTabletem")}
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
                        onClick={() => this.hideComponent("EditTableItems")}
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
                        onClick={() => this.hideComponent("TableImageItems")}
                      >
                        <span className="icon is-small">
                          <PermMediaIcon />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {AddTabletem && <AddTables />}
                {EditTableItems && <EditTable />}
                {TableImageItems && <TableImage />}
              </div>
              <div className="column is-6">
                <div
                  className="container is-widescreen"
                  style={{ marginTop: "50px" }}
                >
                  {TableListItem && <TableList />}
                  {EditTableItemOne && <EditTableItem />}
                  {TableImageItemOne && <TableImageItem />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Tables;
