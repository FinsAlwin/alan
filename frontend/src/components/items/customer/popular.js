import React, { useState, Fragment } from "react";
import noimage from "../img/noimage.png";
import { Link } from "react-router-dom";
import Drawer from "./drawer";
import Modal from "react-modal";
import Close from "@material-ui/icons/Close";

Modal.setAppElement("#mod");

export default function Popular() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <h6 className="titleApp" style={{ color: "#707070" }}>
        Popular Dishes
      </h6>
      <div className="container">
        <div style={{ overflowY: "auto" }}>
          <div className="columns is-mobile">
            <div className="column">
              <Link to="#" onClick={toggleModal}>
                <div className="popular">
                  <div className="popImg">
                    <img src={noimage} />
                  </div>
                  <div className="popName">Food Item 1</div>
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
            <div className="column">
              <Link to="#" onClick={toggleModal}>
                <div className="popular">
                  <div className="popImg">
                    <img src={noimage} />
                  </div>
                  <div className="popName">Food Item 1</div>
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
            <div className="column">
              <Link to="#" onClick={toggleModal}>
                <div className="popular">
                  <div className="popImg">
                    <img src={noimage} />
                  </div>
                  <div className="popName">Food Item 1</div>
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
            <div className="column">
              <Link to="#" onClick={toggleModal}>
                <div className="popular">
                  <div className="popImg">
                    <img src={noimage} />
                  </div>
                  <div className="popName">Food Item 1</div>
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
      ;
    </Fragment>
  );
}
