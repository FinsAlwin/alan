import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory } from "../../../../actions/category";

class ItemList extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.props.getCategory();
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container is-widescreen">
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
                  <th>Category</th>
                  <th>Items</th>
                </tr>
              </thead>
              <tbody>
                {this.props.category.map((category) => (
                  <tr key={category.catId}>
                    <td>
                      <div className="column">
                        <p
                          className="bd-notification is-info"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {category.title}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className="container"
                        style={{ height: "100%", overflowX: "auto" }}
                      >
                        {category.items.map((items, itemsIndex) => (
                          <Fragment key={itemsIndex}>
                            <div className="columns" key={items.itemId}>
                              <div className="column">
                                <p
                                  className="bd-notification is-info"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {items.name}
                                </p>
                                <div className="columns is-mobile">
                                  <div className="column">
                                    <p
                                      className="bd-notification is-info"
                                      style={{
                                        fontSize: "12px",
                                      }}
                                    >
                                      {items.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category.category,
  items: state.items.items,
});

export default connect(mapStateToProps, { getCategory })(ItemList);
