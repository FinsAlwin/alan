import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  deleteCategoryImg,
  getCategoryImgItem,
} from "../../../../actions/categoryImage";
import { getCategory } from "../../../../actions/category";

class CategoryImage extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
    getCategoryImgItem: PropTypes.func.isRequired,
    deleteCategoryImg: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category.catImg !== prevProps.category.catImg) {
      this.props.getCategory();
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
              {this.props.category.map((category) => (
                <div style={{ margin: "5px" }} key={category.catId}>
                  {category.catImg.map((catImg) => (
                    <div className="card" key={catImg.catImgId}>
                      <header className="card-header">
                        <p
                          className="card-header-title"
                          style={{ fontSize: "12px" }}
                        >
                          Title: {category.title}
                        </p>
                      </header>

                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={catImg.image} alt="Placeholder image" />
                        </figure>
                      </div>
                      <footer className="card-footer">
                        <Link
                          to="#"
                          className="card-footer-item"
                          onClick={this.props.deleteCategoryImg.bind(
                            this,
                            catImg.catImgId
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
  category: state.category.category,
});

export default connect(mapStateToProps, {
  getCategory,
  deleteCategoryImg,
  getCategoryImgItem,
})(CategoryImage);
