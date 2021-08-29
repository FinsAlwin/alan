import React, { Component, Fragment } from "react";

import DiningTable from "./diningTable";
import AuthCard from "./authCard";
import ProfileCard from "./profileCard";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="container is-widescreen">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <AuthCard />
              </div>
              <div className="tile is-child box">
                <ProfileCard />
              </div>
            </div>
            <div className="tile is-parent">
              <div
                className="tile is-child box"
                style={{ width: "100%", height: "500px", overflowY: "scroll" }}
              >
                <DiningTable />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
