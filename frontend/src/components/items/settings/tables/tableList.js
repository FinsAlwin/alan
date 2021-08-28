import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTable } from "../../../../actions/tables";

class TableList extends Component {
  static propTypes = {
    tables: PropTypes.array.isRequired,
    getTable: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTable();
  }

  render() {
    return (
      <Fragment>
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
                <th>Table No.</th>
                <th>Description</th>
                <th>Chair</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tables.map((tables) => (
                <tr key={tables.tableId}>
                  <td>{tables.tableId}</td>
                  <td>{tables.tableNumber}</td>
                  <td>
                    <div
                      className="container"
                      style={{ height: "100%", overflowX: "auto" }}
                    >
                      {tables.description}
                    </div>
                  </td>
                  <td>{tables.chair}</td>
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

export default connect(mapStateToProps, { getTable })(TableList);
