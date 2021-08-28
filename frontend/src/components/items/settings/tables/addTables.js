import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTable } from "../../../../actions/tables";

class AddTables extends Component {
  state = {
    tableNumber: "",
    description: "",
    chair: "",
    isActive: false,
    isNotify: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addTable: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { tableNumber, description, isActive, isNotify, chair } = this.state;
    const table = { tableNumber, description, isActive, isNotify, chair };
    this.props.addTable(table);
    this.setState({
      tableNumber: "",
      description: "",
      chair: "",
      isActive: false,
      isNotify: false,
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
              type="number"
              placeholder="Table Number"
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
              placeholder="Number of Chairs"
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
              placeholder="Table description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button
            className="button is-primary"
            type="submit"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addTable })(AddTables);
