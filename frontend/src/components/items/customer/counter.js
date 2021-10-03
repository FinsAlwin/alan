import React, { Component, Fragment } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }
  incrementClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };
  decrementClicks = () => {
    this.setState({
      clicks: this.state.clicks - 1,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="columns is-mobile">
          <div className="column is-4">
            <button className="button btnm" onClick={this.decrementClicks}>
              -
            </button>
          </div>
          <div className="column is-4">
            <div className="number">{this.state.clicks}</div>
          </div>

          <div className="column is-4">
            <button className="button btnp" onClick={this.incrementClicks}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
