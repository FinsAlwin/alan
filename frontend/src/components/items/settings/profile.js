import React, { Component, Fragment } from "react";
import TopNav from "./topNav";

import Form from "../profile/form";

class Profile extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <TopNav />
        <div className="container is-fullhd">
          <div className="gridContainer">
            <div className="container">
              <Form />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
