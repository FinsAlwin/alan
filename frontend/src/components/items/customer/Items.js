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
        <div className="row">
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
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
          },
          content: {
            position: "absolute",
            top: "20%",
            left: 2,
            right: 2,
            bottom: 2,
            border: "1px solid #ccc",
            background: "#fff",
            overflowY: "none",
            outline: "none",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
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
