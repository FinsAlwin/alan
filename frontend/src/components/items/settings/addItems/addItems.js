import React, { Component, Fragment } from "react";
import TopNav from "../topNav";

import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import PermMediaIcon from "@material-ui/icons/PermMedia";

import AddItem from "./additem";
import EditItem from "./editItems";
import ItemList from "./itemList";
import EditItemList from "./editItemList";
import ItemImage from "./itemImage";
import ItemImageItem from "./itemImageitem";

class AddItems extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      Additems: true,
      Edititems: false,
      ItemListOne: true,
      EditItemListOne: false,
      ItemImageIt: false,
      ItemImageItemOne: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    switch (varname) {
      case "Additems":
        this.setState({
          Additems: true,
          Edititems: false,
          ItemListOne: true,
          EditItemListOne: false,
          ItemImageIt: false,
          ItemImageItemOne: false,
        });
        break;
      case "Edititems":
        this.setState({
          Additems: false,
          Edititems: true,
          ItemListOne: false,
          EditItemListOne: true,
          ItemImageIt: false,
          ItemImageItemOne: false,
        });
        break;
      case "ItemImageIt":
        this.setState({
          Additems: false,
          Edititems: false,
          ItemListOne: false,
          EditItemListOne: false,
          ItemImageIt: true,
          ItemImageItemOne: true,
        });
        break;

      default:
        return;
    }
  }
  render() {
    const {
      Additems,
      Edititems,
      EditItemListOne,
      ItemListOne,
      ItemImageIt,
      ItemImageItemOne,
    } = this.state;
    return (
      <Fragment>
        <TopNav />
        <div className="container is-widescreen">
          <div className="gridContainer">
            <div className="columns">
              <div className="column is-5">
                <div className="tabs is-centered">
                  <ul>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => this.hideComponent("Additems")}
                      >
                        <span className="icon is-small">
                          <AddIcon />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => this.hideComponent("Edititems")}
                      >
                        <span className="icon is-small">
                          <EditIcon />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => this.hideComponent("ItemImageIt")}
                      >
                        <span className="icon is-small">
                          <PermMediaIcon />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {Additems && <AddItem />}

                {Edititems && <EditItem />}

                {ItemImageIt && <ItemImage />}
              </div>
              <div className="column is-6">
                <div
                  className="container is-widescreen"
                  style={{ marginTop: "50px" }}
                >
                  {ItemListOne && <ItemList />}
                  {EditItemListOne && <EditItemList />}
                  {ItemImageItemOne && <ItemImageItem />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddItems;
