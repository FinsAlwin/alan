import React, { Component, Fragment } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItemImg } from "../../../../actions/itemImage";
import { getItems } from "../../../../actions/items";

class ItemImageItem extends Component {
  state = {
    imagePreview: "",
    image: null,
    itemId: "",
  };

  static propTypes = {
    itemImg: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    addItemImg: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemImg !== prevProps.itemImg) {
      this.props.getItems();
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
      itemId: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", this.state.image);
    form_data.append("items", this.state.itemId);
    this.props.addItemImg(form_data);
    this.setState({
      imagePreview: "",
      image: null,
      itemId: "",
    });
    this.props.getItems();
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
                    <option>Select Items</option>
                    {this.props.items.map((items) => (
                      <option key={items.itemId} value={items.itemId}>
                        {items.name}
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
        <hr />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  itemImg: state.itemImg.itemImg,
});

export default connect(mapStateToProps, {
  addItemImg,
  getItems,
})(ItemImageItem);
