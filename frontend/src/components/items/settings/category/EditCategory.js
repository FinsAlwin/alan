import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getCategory,
  getCategoryItem,
  deleteCategory,
} from "../../../../actions/category";

class EditCategory extends Component {
  static propTypes = {
    categoryItem: PropTypes.object,
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
    getCategoryItem: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Fragment>
        <div className="table-container">
          <table
            className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            style={{ fontSize: "12px" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.category.map((category) => (
                <tr key={category.catId}>
                  <td>{category.catId}</td>
                  <td>{category.title}</td>
                  <td>
                    <button
                      className="button is-small is-primary is-light"
                      onClick={this.props.getCategoryItem.bind(
                        this,
                        category.catId
                      )}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="button is-small is-danger is-light"
                      onClick={this.props.deleteCategory.bind(
                        this,
                        category.catId
                      )}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category.category,
  categoryItem: state.categoryItem.categoryItem,
});

export default connect(mapStateToProps, {
  getCategory,
  getCategoryItem,
  deleteCategory,
})(EditCategory);
