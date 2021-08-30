import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import TocIcon from "@material-ui/icons/Toc";
import HistoryIcon from "@material-ui/icons/History";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

class NavIcon extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Fragment>
        <div className="columns is-mobile">
          <div className="column is-2">
            <NavLink to="/category" activeClassName="active">
              <div className="navIcon">
                <SettingsIcon />
              </div>
            </NavLink>
          </div>
          <div className="column is-2">
            <NavLink to="/orders" activeClassName="active">
              <div className="navIcon">
                <TocIcon />
              </div>
            </NavLink>
          </div>
          <div className="column is-2">
            <NavLink to="/history" activeClassName="active">
              <div className="navIcon">
                <HistoryIcon />
              </div>
            </NavLink>
          </div>
          <div className="column is-2">
            <NavLink to="/" activeClassName="active">
              <div className="navIcon">
                <HomeIcon />
              </div>
            </NavLink>
          </div>
          <div className="column is-2">
            <div className="navIcon">
              <NotificationsIcon />
            </div>
          </div>

          <div className="column is-2">
            <Link to="/login">
              <div className="navIcon" onClick={this.props.logout}>
                <ExitToAppIcon />
              </div>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavIcon);
