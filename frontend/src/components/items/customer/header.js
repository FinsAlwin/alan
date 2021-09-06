import React, { Component, Fragment } from "react";
import arc from "../img/arc.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="cust-title">{this.props.title}</div>
          <div className="cust-img-container">
            <img width="60px" src={arc} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
