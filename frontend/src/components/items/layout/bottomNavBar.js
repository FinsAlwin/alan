import React, { Component, Fragment } from "react";
import NavIcon from "./navIcons";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

class BottomNavBar extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  render() {
    if (this.props.isAuthenticated) {
      return (
        <Fragment>
          <div className="navbar">
            <NavIcon />
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(BottomNavBar);
