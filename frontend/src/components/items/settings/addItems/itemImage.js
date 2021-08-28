import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteItemImg, getItemImgItem } from "../../../../actions/itemImage";
import { getItems } from "../../../../actions/items";

class ItemImage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    getItemImgItem: PropTypes.func.isRequired,
    deleteItemImg: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.items.itemImg !== prevProps.items.itemImg) {
      this.props.getItems();
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
              {this.props.items.map((items) => (
                <div style={{ margin: "5px" }} key={items.itemId}>
                  {items.itemImg.map((itemImg) => (
                    <div className="card" key={itemImg.itemImgId}>
                      <header className="card-header">
                        <p
                          className="card-header-title"
                          style={{ fontSize: "12px" }}
                        >
                          Name: {items.name}
                        </p>
                      </header>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={itemImg.image} alt="Placeholder image" />
                        </figure>
                      </div>
                      <footer className="card-footer">
                        <Link
                          to="#"
                          className="card-footer-item"
                          onClick={this.props.deleteItemImg.bind(
                            this,
                            itemImg.itemImgId
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
  items: state.items.items,
});

export default connect(mapStateToProps, {
  getItems,
  deleteItemImg,
  getItemImgItem,
})(ItemImage);
