import React, { Component, Fragment } from "react";
import TopItems from "./topItems";

class TopNav extends Component {
  render() {
    return (
      <Fragment>
        <div className="topNave">
          <TopItems />
        </div>
      </Fragment>
    );
  }
}

export default TopNav;
