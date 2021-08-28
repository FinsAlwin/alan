import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory } from "../../../../actions/category";

class CategoryList extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }
  render() {
    return (
      <Fragment>
        <div className="container is-widescreen">
          <div
            className="table-container"
            style={{ height: "80%", overflowY: "scroll" }}
          >
            <table
              className="table is-bordered is-striped is-narrow is-hoverable"
              style={{ fontSize: "12px" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                {this.props.category.map((category) => (
                  <tr key={category.catId}>
                    <td>{category.catId}</td>
                    <td>{category.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category.category,
});

export default connect(mapStateToProps, { getCategory })(CategoryList);
