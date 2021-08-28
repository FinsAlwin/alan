import React, { Component, Fragment } from "react";

import DiningTable from "./diningTable";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="container is-widescreen">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">One</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="tile is-child box">
                <p className="title">Two</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
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
