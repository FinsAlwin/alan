import React, { useState, Fragment } from "react";
import noimage from "../img/noimage.png";
import { Link } from "react-router-dom";
import Cart from "../img/iconCart.svg";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Orders from "./orders";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <Link to="#" onClick={toggleModal}>
        <div className="cartDiv">
          <div className="columns is-mobile">
            <div className="column is-3">
              <div className="cartImg">
                <img src={Cart} style={{ paddingLeft: "10px" }} />
                <div className="myorder">My Order</div>
              </div>
            </div>
            <div className="column is-4"></div>
            <div className="column is-5">
              <div className="itemNo">Items : 4 </div>
              <div className="totalC">Total : 400</div>
            </div>
          </div>
        </div>
      </Link>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            position: "absolute",
            top: 20,
            left: 1,
            right: 1,
            bottom: 1,
            border: "1px solid #ccc",
            background: "#F9F9FF",
            overflow: "none",
            outline: "none",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
          },
        }}
      >
        <div className="backToCat">
          <Link to="#" onClick={toggleModal}>
            <span style={{ top: 10 }}>
              <ArrowBackIosIcon />
            </span>
            <span>My Orders</span>
          </Link>
        </div>
        <Orders />
      </Modal>
    </Fragment>
  );
}
