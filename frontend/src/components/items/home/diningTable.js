import React, { Component, Fragment } from "react";
import DiningIcons from "./diningIcon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTable } from "../../../actions/tables";

class DiningTable extends Component {
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
        <div className="container is-widescreen">
          <div className="row">
            {this.props.tables.map((tables) => (
              <div className="col-lg-3" key={tables.tableId}>
                <div
                  className="card"
                  style={{ alignItems: "center", margin: "10px" }}
                >
                  <Link to="#">
                    <DiningIcons
                      countTable={tables.tableNumber}
                      countChair={tables.chair}
                      status={tables.chair == false ? "notactive" : "active"}
                      notify={tables.isNotify == false ? "false" : "true"}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  tables: state.tables.tables,
});

export default connect(mapStateToProps, { getTable })(DiningTable);
