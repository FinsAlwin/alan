import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getType } from "../../../actions/typeOf";

class Form extends Component {
  static propTypes = {
    type: PropTypes.array.isRequired,
    getType: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getType();
  }

  render() {
    return (
      <Fragment>
        <div className="container is-widescreen">
          <div
            className="gridContainer"
            style={{ height: "80%", overflowX: "hidden" }}
          >
            <div className="columns">
              <div className="column is-6">
                <form onSubmit={this.onSubmit} className="form-horizontal">
                  <div className="columns">
                    <div className="column is-4">
                      <div className="form-group">
                        <input
                          className="input is-primary"
                          type="text"
                          placeholder="Resturant Name"
                        />
                      </div>
                    </div>
                    <div className="column is-4">
                      <div className="form-group">
                        <div className="select is-primary">
                          <select>
                            <option>Select category</option>
                            {this.props.type.map((type) => (
                              <option key={type.typeId} value={type.type}>
                                {type.type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="column is-4">
                      <div className="form-group">
                        <input
                          className="input is-primary"
                          type="text"
                          placeholder="Owner's name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-6">
                      <div className="form-group">
                        <input
                          className="input is-primary "
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="form-group">
                        <input
                          className="input is-primary"
                          type="text"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-6">
                      <div className="form-group">
                        <input
                          className="input is-primary "
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="form-group">
                        <input
                          className="input is-primary"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <div className="form-group">
                        <textarea
                          className="textarea is-primary is-small"
                          placeholder="Description"
                          rows="1"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className="button is-small is-link">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  type: state.type.type,
});

export default connect(mapStateToProps, { getType })(Form);
