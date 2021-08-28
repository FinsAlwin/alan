import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BackupIcon from "@material-ui/icons/Backup";
import { editItems, getItems } from "../../../../actions/items";

class EditItemList extends Component {
  state = {
    name: "",
    description: "",
    category: "",
  };

  static propTypes = {
    itemOne: PropTypes.object,
    editItems: PropTypes.func.isRequired,
    category: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeSelect = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.itemOne.itemId;
    const items = {
      name:
        Object.keys(this.state.name).length == 0
          ? this.props.itemOne.name
          : this.state.name,
      description:
        Object.keys(this.state.description).length == 0
          ? this.props.itemOne.description
          : this.state.description,
      category:
        Object.keys(this.state.category).length == 0
          ? this.props.itemOne.category
          : this.state.category,
    };
    this.props.editItems(id, items);
    this.setState({
      name: "",
      description: "",
      category: "",
    });
  };

  render() {
    let Item;

    if (this.props.itemOne !== null) {
      Item = (
        <div
          className="container"
          style={{ height: "100%", overflowX: "auto " }}
        >
          <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
              <input
                className="input is-primary"
                style={{ width: "50%" }}
                type="text"
                placeholder={this.props.itemOne.name}
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="textarea is-primary is-small"
                placeholder={this.props.itemOne.description}
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <div className="columns">
              <div className="column is-6">
                <div className="form-group">
                  <div className="select is-primary">
                    <select id="category" onChange={this.handleChangeSelect}>
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
                <button
                  className="button is-primary"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      Item = (
        <div>
          <p className="subtitle is-5">Select a item to Edit.</p>
        </div>
      );
    }
    return <Fragment>{Item}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  itemOne: state.itemOne.itemOne,
  category: state.category.category,
});

export default connect(mapStateToProps, { editItems, getItems })(EditItemList);
