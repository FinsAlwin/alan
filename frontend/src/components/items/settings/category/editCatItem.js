import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getCategory,
  editCategory,
  getCategoryItem,
} from "../../../../actions/category";

class EditCatItem extends Component {
  state = {
    title: "",
  };

  static propTypes = {
    categoryItem: PropTypes.object,
    category: PropTypes.array.isRequired,
    editCategory: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryItem !== prevProps.categoryItem) {
      this.props.getCategory();
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.categoryItem.catId;
    const { title } = this.state;
    const category = { title };

    this.props.editCategory(id, category);
    this.setState({
      title: "",
    });
  };

  render() {
    let catItem;

    if (this.props.categoryItem !== null) {
      catItem = (
        <div
          className="container"
          style={{ height: "100%", overflowX: "auto " }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="input is-primary"
                style={{ width: "50%" }}
                type="text"
                placeholder={this.props.categoryItem.title}
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button
                className="button is-small is-primary"
                type="submit"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      catItem = (
        <div>
          <p className="subtitle is-5">Select a category to Edit.</p>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="container">{catItem}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryItem: state.categoryItem.categoryItem,
  category: state.category.category,
});

export default connect(mapStateToProps, {
  editCategory,
  getCategory,
  getCategoryItem,
})(EditCatItem);
