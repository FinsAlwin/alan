import React, { Component, Fragment } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTableImg } from "../../../../actions/tableImage";
import { getTable } from "../../../../actions/tables";

class TableImageItem extends Component {
  state = {
    imagePreview: "",
    image: null,
    tableId: "",
  };

  static propTypes = {
    tables: PropTypes.array.isRequired,
    tableImg: PropTypes.array.isRequired,
    addTableImg: PropTypes.func.isRequired,
    getTable: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTable();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tableImg !== prevProps.tableImg) {
      this.props.getTable();
    }
  }

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      tableId: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", this.state.image);
    form_data.append("table", this.state.tableId);
    this.props.addTableImg(form_data);
    this.setState({
      imagePreview: "",
      image: null,
      tableId: "",
    });
    this.props.getTable();
  };

  render() {
    return (
      <Fragment>
        <div className="title">Add Image</div>
        <form onSubmit={this.onSubmit} className="form-horizontal">
          <div className="columns">
            <div className="column is-6">
              <div className="form-group">
                <div className="select is-primary">
                  <select id="categoryId" onChange={this.handleChangeSelect}>
                    <option>Select Table</option>
                    {this.props.tables.map((tables) => (
                      <option key={tables.tableId} value={tables.tableId}>
                        {tables.tableNumber}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="form-group">
                <div className="file is-info">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      id="image"
                      accept="image/png, image/jpeg"
                      onChange={this.handleImageChange}
                      required
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <BackupIcon />
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <button
                className="button is-primary"
                type="submit"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
            <div className="column is-6">
              {this.state.imagePreview && (
                <figure className="image is-128x128">
                  <img src={this.state.imagePreview} />
                </figure>
              )}
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  tables: state.tables.tables,
  tableImg: state.tableImg.tableImg,
});

export default connect(mapStateToProps, {
  addTableImg,
  getTable,
})(TableImageItem);
