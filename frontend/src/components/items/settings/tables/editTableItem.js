import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTable, editTable, getTableItem } from "../../../../actions/tables";

class EditTableItem extends Component {
  state = {
    tableNumber: "",
    description: "",
    chair: "",
    isActive: false,
    isNotify: false,
  };

  static propTypes = {
    tablesOne: PropTypes.object,
    tables: PropTypes.array.isRequired,
    editTable: PropTypes.func.isRequired,
    getTable: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTable();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tablesOne !== prevProps.tablesOne) {
      this.props.getTable();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.tablesOne.tableId;
    const table = {
      tableNumber:
        Object.keys(this.state.tableNumber).length == 0
          ? this.props.tablesOne.tableNumber
          : this.state.tableNumber,
      description:
        Object.keys(this.state.description).length == 0
          ? this.props.tablesOne.description
          : this.state.description,
      isActive: false,
      isNotify: false,
      chair:
        Object.keys(this.state.chair).length == 0
          ? this.props.tablesOne.chair
          : this.state.chair,
    };
    this.props.editTable(id, table);
    this.setState({
      tableNumber: "",
      description: "",
      chair: "",
      isActive: false,
      isNotify: false,
    });
  };

  render() {
    let tableItem;

    if (this.props.tablesOne !== null) {
      tableItem = (
        <div
          className="container"
          style={{ height: "80%", overflowY: "auto " }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="input is-primary"
                style={{ width: "50%" }}
                type="number"
                placeholder={this.props.tablesOne.tableNumber}
                id="tableNumber"
                min="1"
                value={this.state.tableNumber}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input is-primary"
                style={{ width: "50%" }}
                type="number"
                placeholder={this.props.tablesOne.chair}
                id="chair"
                min="2"
                value={this.state.chair}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="textarea is-primary is-small"
                placeholder={this.props.tablesOne.description}
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              ></textarea>
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
      tableItem = (
        <div>
          <p className="subtitle is-5">Select a Table to Edit.</p>
        </div>
      );
    }
    return <Fragment>{tableItem}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  tablesOne: state.tablesOne.tablesOne,
  tables: state.tables.tables,
});

export default connect(mapStateToProps, {
  editTable,
  getTable,
  getTableItem,
})(EditTableItem);
