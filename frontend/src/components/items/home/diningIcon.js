import React, { Component, Fragment } from "react";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

class DiningIcon extends Component {
  render() {
    const status = this.props.status;
    let statusDiv;
    if (status == "active") {
      statusDiv = <div className="statusTableA">{this.props.status}</div>;
    } else {
      statusDiv = <div className="statusTableNA">{this.props.status}</div>;
    }

    const notitab = this.props.notify;
    let notifyC;
    if (notitab == "true") {
      notifyC = (
        <div className="notitable">
          <NotificationImportantIcon style={{ color: "#ec3131" }} />
        </div>
      );
    } else {
      <div className="notitable">
        <NotificationImportantIcon style={{ color: "white" }} />
      </div>;
    }
    return (
      <Fragment>
        <div className="dtable">
          <div className="dtinput">
            <div className="tableNo">Table No.{this.props.countTable}</div>
            <div className="chairNo">Chairs: {this.props.countChair}</div>
            <div className="container">
              <div className="statusTable">{statusDiv}</div>
            </div>
            {notifyC}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DiningIcon;
