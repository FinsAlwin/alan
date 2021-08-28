import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCategory } from "../../../../actions/category";

class AddCategory extends Component {
  state = {
    title: "",
    user: "",
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addCategory: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { title } = this.state;
    const category = { title, user: user.id };
    this.props.addCategory(category);
    this.setState({
      title: "",
      user: "",
    });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="input is-primary"
              style={{ width: "50%" }}
              type="text"
              placeholder="Title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button
              className="button is-primary"
              type="submit"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addCategory })(AddCategory);
