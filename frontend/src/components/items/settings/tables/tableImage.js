import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  deleteTableImg,
  getTableImgItem,
} from "../../../../actions/tableImage";
import { getTable } from "../../../../actions/tables";

class TableImage extends Component {
  static propTypes = {
    tables: PropTypes.array.isRequired,
    getTable: PropTypes.func.isRequired,
    getTableImgItem: PropTypes.func.isRequired,
    deleteTableImg: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTable();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tables.tableImg !== prevProps.tables.tableImg) {
      this.props.getTable();
    }
  }
  render() {
    return (
      <Fragment>
        <div
          className="table-container"
          style={{ height: "80%", overflowY: "scroll" }}
        >
          <div className="container is-widescreen">
            <div className="row">
              {this.props.tables.map((tables) => (
                <div style={{ margin: "5px" }} key={tables.tableId}>
                  {tables.tableImg.map((tableImg) => (
                    <div className="card" key={tableImg.tableImgId}>
                      <header className="card-header">
                        <p
                          className="card-header-title"
                          style={{ fontSize: "12px" }}
                        >
                          Table Number : {tables.tableNumber}
                        </p>
                      </header>

                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={tableImg.image} alt="Placeholder image" />
                        </figure>
                      </div>
                      <footer className="card-footer">
                        <Link
                          to="#"
                          className="card-footer-item"
                          onClick={this.props.deleteTableImg.bind(
                            this,
                            tableImg.tableImgId
                          )}
                        >
                          Delete
                        </Link>
                      </footer>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
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
  deleteTableImg,
  getTableImgItem,
})(TableImage);
