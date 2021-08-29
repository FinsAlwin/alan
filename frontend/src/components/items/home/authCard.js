import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../../../actions/auth";

class AuthCard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    const { user } = this.props.auth;
    return (
      <Fragment>
        <span className="tag is-primary">{user.username}</span>
        <div className="box has-text-primary">
          {user.first_name} {user.last_name}
        </div>

        <div className="box has-text-info-dark">{user.email}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(AuthCard);
