import React, { Component, Fragment } from "react";

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <div className="banner">
          <img src={this.props.banner} />
        </div>
      </Fragment>
    );
  }
}

export default Banner;
