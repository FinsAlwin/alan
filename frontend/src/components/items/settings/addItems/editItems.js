import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getItems, getItemOne, deleteItems } from "../../../../actions/items";

class EditItem extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    getItemOne: PropTypes.func.isRequired,
    deleteItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <Fragment>
        <div
          className="table-container"
          style={{ height: "80%", overflowY: "auto" }}
        >
          <table
            className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            style={{ fontSize: "12px" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Category Id</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((items) => (
                <tr key={items.itemId}>
                  <td>{items.itemId}</td>
                  <td>{items.name}</td>
                  <td>
                    <div
                      style={{
                        width: "100%",
                        height: "100px",
                        overflowY: "auto",
                      }}
                    >
                      {items.description}
                    </div>
                  </td>

                  <td>{items.category}</td>
                  <td>
                    <button
                      className="button is-small is-primary is-light"
                      onClick={this.props.getItemOne.bind(this, items.itemId)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="button is-small is-danger is-light"
                      onClick={this.props.deleteItems.bind(this, items.itemId)}
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
  items: state.items.items,
  itemOne: state.itemOne.itemOne,
});

export default connect(mapStateToProps, {
  getItems,
  getItemOne,
  deleteItems,
})(EditItem);
