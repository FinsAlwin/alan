import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.addCategoryImg) alert.success(message.addCategoryImg);
      if (message.deleteCategoryImg) alert.success(message.deleteCategoryImg);
      if (message.addCategory) alert.success(message.addCategory);
      if (message.editCategory) alert.success(message.editCategory);
      if (message.deleteCategory) alert.success(message.deleteCategory);
      if (message.addItems) alert.success(message.addItems);
      if (message.editItems) alert.success(message.editItems);
      if (message.deleteItems) alert.success(message.deleteItems);
      if (message.addItemImg) alert.success(message.addItemImg);
      if (message.deleteItemImg) alert.success(message.deleteItemImg);
      if (message.addTable) alert.success(message.addTable);
      if (message.editTable) alert.success(message.editTable);
      if (message.deleteTable) alert.success(message.deleteTable);
      if (message.addTableImg) alert.success(message.addTableImg);
      if (message.deleteTableImg) alert.success(message.deleteTableImg);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
