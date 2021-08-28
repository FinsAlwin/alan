import React, { Component, Fragment } from "react";

import DataTable from "react-data-table-component";

import { Button } from "react-bulma-components";

const data = [
  {
    id: 1,
    tableNumber: "1",
    totalPrice: "60",
    orderStatus: "ORDER PLACED",
    pStatus: "Paid",
  },
  {
    id: 2,
    tableNumber: "2",
    totalPrice: "80",
    orderStatus: "ACCEPTED",
    pStatus: "Paid",
  },
  {
    id: 3,
    tableNumber: "3",
    totalPrice: "50",
    orderStatus: "PREPARING ORDER",
    pStatus: "Paid",
  },
  {
    id: 4,
    tableNumber: "4",
    totalPrice: "60",
    orderStatus: "READY",
    pStatus: "Pending",
  },
  {
    id: 5,
    tableNumber: "6",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
  {
    id: 6,
    tableNumber: "7",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
  {
    id: 7,
    tableNumber: "8",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
  {
    id: 8,
    tableNumber: "9",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
  {
    id: 9,
    tableNumber: "10",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
  {
    id: 10,
    tableNumber: "11",
    totalPrice: "70",
    orderStatus: "SERVED",
    pStatus: "Pending",
  },
];

const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true,
    cell: (row) => (
      <div style={{ fontFamily: "Poppins", width: "10px", height: "40px" }}>
        {row.id}
      </div>
    ),
  },
  {
    name: "Table Number",
    selector: "tableNumber",
    sortable: true,
    cell: (row) => (
      <div style={{ fontFamily: "Poppins", width: "20px", height: "40px" }}>
        {row.tableNumber}
      </div>
    ),
  },
  {
    name: "Total Price",
    selector: "totalPrice",
    sortable: true,
    cell: (row) => (
      <div style={{ fontFamily: "Poppins", width: "30px", height: "40px" }}>
        {row.totalPrice}
      </div>
    ),
  },
  {
    name: "Order Status",
    selector: "orderStatus",
    sortable: true,
    cell: (row) => (
      <div style={{ fontFamily: "Poppins", width: "80px", height: "40px" }}>
        {row.orderStatus}
      </div>
    ),
  },
  {
    name: "Payment Status",
    selector: "pStatus",
    sortable: true,
    cell: (row) => (
      <div style={{ fontFamily: "Poppins", width: "80px", height: "40px" }}>
        {row.pStatus}
      </div>
    ),
  },
  {
    name: "Action",
    selector: "action",
    sortable: true,
    right: true,
    cell: (row) => (
      <div>
        <Button color="primary">View</Button>
      </div>
    ),
  },
];

class Orders extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="container is-fullhd">
          <div className="orderItem">
            <div className="title">Order Items</div>
            <div className="row">
              <div className="col-lg-8">
                <div className="tablecontainer">
                  <DataTable columns={columns} data={data} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="detailscontainer">
                  <label className="label">Order Details</label>
                  <div className="columns is-vcentered">
                    <div className="column is-4">
                      <Button color="danger">Download</Button>
                    </div>
                    <div className="column is-6">
                      <div className="field">
                        <div className="control">
                          <div className="select">
                            <select>
                              <option>Select Status</option>
                              <option>ORDER PLACED</option>
                              <option>ACCEPTED</option>
                              <option>PREPARING ORDER</option>
                              <option>READY</option>
                              <option>SERVED</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      Table Number: <span> 1 </span>
                    </div>
                    <div className="col-md-6">
                      Order Id: <span> 1 </span>
                    </div>
                  </div>
                  <hr />
                  <div style={{ fontFamily: "Poppins", fontSize: "12px" }}>
                    Payment Status: <span className="label"> Pending</span>
                  </div>
                  <div style={{ fontFamily: "Poppins", fontSize: "12px" }}>
                    Order Status: <span className="label"> ORDER PLACED</span>
                  </div>
                  <table className="table" style={{ fontSize: "12px" }}>
                    <thead>
                      <tr>
                        <th style={{ width: "20px" }}>Item Name</th>
                        <th style={{ width: "40px" }}>Item Quantity</th>
                        <th style={{ width: "20px" }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>item1</td>
                        <td>2</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>item2</td>
                        <td>1</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>item2</td>
                        <td>3</td>
                        <td>30</td>
                      </tr>
                    </tbody>
                  </table>
                  <label className="label">
                    Total: <span>60</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Orders;
