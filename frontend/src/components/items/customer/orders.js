import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Orders extends Component {
  render() {
    return (
      <Fragment>
        <div className="orderO">
          <div className="orderTitle">
            <div className="columns is-mobile">
              <div className="column is-6">
                <div className="nameOrder">Vegetables Meat</div>
                <span className="ordertotal">Total:</span>
                <span className="ordertotaln">50.00USD</span>
              </div>
              <div className="column is-5">
                <Counter />
              </div>
            </div>
          </div>
          <hr />
          <div className="orderTitle">
            <div className="columns is-mobile">
              <div className="column is-6">
                <div className="nameOrder">Vegetables Meat</div>
                <span className="ordertotal">Total:</span>
                <span className="ordertotaln">50.00USD</span>
              </div>
              <div className="column is-5">
                <Counter />
              </div>
            </div>
          </div>
          <hr />
          <div className="orderTitle">
            <div className="columns is-mobile">
              <div className="column is-6">
                <div className="nameOrder">Vegetables Meat</div>
                <span className="ordertotal">Total:</span>
                <span className="ordertotaln">50.00USD</span>
              </div>
              <div className="column is-5">
                <Counter />
              </div>
            </div>
          </div>
        </div>
        <div className="orderT">
          <div className="columns is-mobile">
            <div className="column is-6">
              <span className="ordertotal">Total:</span>
            </div>
            <div className="column is-6">
              <span className="ordertotaln">50.00USD</span>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column is-6">
              <span className="ordertotal">Tip</span>
            </div>
            <div className="column is-4">
              <Counter />
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-6">
              <span className="ordertotalG">Grand Total</span>
            </div>
            <div className="column is-6">
              <span className="ordertotalGN">218.00USD</span>
            </div>
          </div>
        </div>
        <button className="button btnPay">PAY NOW</button>
      </Fragment>
    );
  }
}

export default Orders;
