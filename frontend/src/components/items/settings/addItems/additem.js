import React, { Component, Fragment } from "react";
import TopNav from "../topNav";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItems } from "../../../../actions/items";
import { getCategory } from "../../../../actions/category";

class AddItem extends Component {
  state = {
    name: "",
    user: "",
    description: "",
    category: "",
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addItems: PropTypes.func.isRequired,
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { name, description, category } = this.state;
    const items = { name, user: user.id, description, category };
    this.props.addItems(items);
    this.setState({
      name: "",
      user: "",
      description: "",
      category: "",
    });
  };

  render() {
    return (
      <Fragment>
        <TopNav />
        <form onSubmit={this.onSubmit} className="form-horizontal">
          <div className="form-group">
            <input
              className="input is-primary"
              style={{ width: "50%" }}
              type="text"
              placeholder="Item name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="textarea is-primary is-small"
              placeholder="Item description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <div className="columns">
            <div className="column is-6">
              <div className="form-group">
                <div className="select is-primary">
                  <select id="category" onChange={this.handleChangeSelect}>
                    <option>Select category</option>
                    {this.props.category.map((category) => (
                      <option key={category.catId} value={category.catId}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <button
                className="button is-primary"
                type="submit"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.category.category,
});

export default connect(mapStateToProps, { addItems, getCategory })(AddItem);
