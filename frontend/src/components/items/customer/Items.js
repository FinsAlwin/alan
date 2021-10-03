import React, { useState, Fragment } from "react";
import noimage from "../img/noimage.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Drawer from "./drawer";
import Close from "@material-ui/icons/Close";

export default function Items() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <div className="itemContainer">
        <div className="columns is-mobile">
          <div className="column is-6">
            <Link to="#" onClick={toggleModal}>
              <div className="itemCard">
                <div className="itemImage">
                  <img src={noimage} />
                </div>
                <div className="itemsName">Vegetables Meat</div>
                <div className="itemsPrice">50.00</div>
                <div className="starDiv">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star unchecked"></span>
                  <span className="fa fa-star unchecked"></span>
                </div>
              </div>
            </Link>
          </div>

          <div className="column is-6">
            <Link to="#" onClick={toggleModal}>
              <div className="itemCard">
                <div className="itemImage">
                  <img src={noimage} />
                </div>
                <div className="itemsName">Vegetables Meat</div>
                <div className="itemsPrice">50.00</div>
                <div className="starDiv">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star unchecked"></span>
                  <span className="fa fa-star unchecked"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            background: "#fff",
            overflowX: "hidden",
            outline: "none",
          },
        }}
      >
        <div className="close">
          <Link to="#" onClick={toggleModal}>
            <Close />
          </Link>
        </div>

        <Drawer />
      </Modal>
    </Fragment>
  );
}
