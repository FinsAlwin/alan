import React, { Component, Fragment } from "react";
import noimage from "../img/noimage.png";
import Favorite from "@material-ui/icons/Favorite";

import { Link } from "react-router-dom";
import Counter from "./counter";

class Drawer extends Component {
  render() {
    return (
      <Fragment>
        <div className="details">
          <img className="imgContainerD" src={noimage} />
          <div className="favorite">
            <Favorite />
          </div>
          <div className="detail-title">Food Item 1</div>
          <div className="starDiva">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="detail-rating">80 ratings</span>
          </div>
          <div className="detail-subtitle">About Food Item 1</div>
          <div className="detail-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="counter">
            <Counter />
          </div>
          <div className="btn-addorder">
            <button className="button btna">Add To Order</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Drawer;
