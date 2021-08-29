import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

import logo from "../img/logo.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="hero is-fullheight is-link">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <div className="box">
                  <img src="https://miro.medium.com/proxy/0*4fHRBbNhF_1jpdCM.jpeg" />
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-small is-primary"
                      type="text"
                      placeholder="Username"
                      autoFocus=""
                      name="username"
                      onChange={this.onChange}
                      value={username}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-small is-primary"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-block is-dark is-small is-fullwidth"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
