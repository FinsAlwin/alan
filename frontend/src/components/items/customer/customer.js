import React, { Component, Fragment } from "react";

import { useParams, Redirect } from "react-router-dom";

import Header from "./header";
import Banner from "./banner";
import CategoryFront from "./categoryFront";
import Footer from "./footer";
import banner from "../img/banner.svg";

function Customer() {
  let { userid, tableid } = useParams();

  if (userid == "alwin") {
    return (
      <Fragment>
        <Header title="Alwin's Club" />
        <Banner banner={banner} />
        <CategoryFront />
        <Footer />
      </Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Customer;
