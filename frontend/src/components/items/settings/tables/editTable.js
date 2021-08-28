import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTable,
  getTableItem,
  deleteTable,
} from "../../../../actions/tables";

class EditTable extends Component {
  static propTypes = {
    tables: PropTypes.array.isRequired,
    getTable: PropTypes.func.isRequired,
    getTableItem: PropTypes.func.isRequired,
    deleteTable: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTable();
  }

  componentDidUpdate(prevProps) {
    // if (this.props.tablesOne !== prevProps.tablesOne) {
    //   this.props.getTable();
    // }
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
                <th>Table Number</th>
                <th>Number of Cahir</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tables.map((tables) => (
                <tr key={tables.tableId}>
                  <td>{tables.tableId}</td>
                  <td>{tables.tableNumber}</td>
                  <td>{tables.chair}</td>
                  <td>{tables.description}</td>
                  <td>
                    <button
                      className="button is-small is-primary is-light"
                      onClick={this.props.getTableItem.bind(
                        this,
                        tables.tableId
                      )}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="button is-small is-danger is-light"
                      onClick={this.props.deleteTable.bind(
                        this,
                        tables.tableId
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
  tables: state.tables.tables,
});

export default connect(mapStateToProps, {
  getTable,
  getTableItem,
  deleteTable,
})(EditTable);
