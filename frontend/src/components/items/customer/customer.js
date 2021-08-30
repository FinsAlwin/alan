import React, { Component, Fragment } from "react";

import { useParams, Redirect } from "react-router-dom";

function Customer() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userid, tableid } = useParams();

  if (userid == "alwin") {
    return (
      <Fragment>
        <h3>User: {userid}</h3>
        <h3>Table: {tableid}</h3>
      </Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Customer;
