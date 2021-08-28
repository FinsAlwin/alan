import React, { Component, Fragment } from "react";
import BackupIcon from "@material-ui/icons/Backup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCategoryImg } from "../../../../actions/categoryImage";
import { getCategory } from "../../../../actions/category";

class CatImgItem extends Component {
  state = {
    imagePreview: "",
    image: null,
    categoryId: "",
  };

  static propTypes = {
    category: PropTypes.array.isRequired,
    categoryImg: PropTypes.array.isRequired,
    addCategoryImg: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryImg !== prevProps.categoryImg) {
      this.props.getCategory();
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
      categoryId: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", this.state.image);
    form_data.append("category", this.state.categoryId);
    this.props.addCategoryImg(form_data);
    this.setState({
      imagePreview: "",
      image: null,
      categoryId: "",
    });
    this.props.getCategory();
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="title">Add Image</div>
          <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="columns">
              <div className="column is-6">
                <div className="form-group">
                  <div className="select is-primary">
                    <select id="categoryId" onChange={this.handleChangeSelect}>
                      <option>Select category</option>
                      {this.props.category.map((category) => (
                        <option key={category.catId} value={category.catId}>
                          {category.title}
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
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category.category,
  categoryImg: state.categoryImg.categoryImg,
});

export default connect(mapStateToProps, {
  addCategoryImg,
  getCategory,
})(CatImgItem);
