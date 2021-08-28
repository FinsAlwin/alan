import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
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
                            <option>Select Type</option>
                            <option>With options</option>
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

export default Form;
