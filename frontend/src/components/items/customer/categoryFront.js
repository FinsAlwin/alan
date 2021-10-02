import React, { useState, Fragment } from "react";
import noimage from "../img/noimage.png";
import { Link } from "react-router-dom";
import Items from "./Items";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

Modal.setAppElement("#mod");

export default function CategoryFront() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <h6 className="titleApp">Category</h6>

      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 1</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 2</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 3</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 4</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 5</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 6</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 7</div>
              </div>
            </Link>
          </div>
          <div className="column is-3">
            <Link to="#" onClick={toggleModal}>
              <div className="catIcon">
                <div className="catImg">
                  <img src={noimage} />
                </div>
                <div className="catName">Category 8</div>
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
            position: "absolute",
            top: 20,
            left: 0,
            right: 0,
            bottom: 0,
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
            <span>Category</span>
          </Link>
        </div>
        <Items />
      </Modal>
    </Fragment>
  );
}
