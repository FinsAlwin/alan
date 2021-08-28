import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./style.css";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  IndexRoute,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Alerts from "./items/common/Alerts";
import Login from "./items/login/login";
import Dashboard from "./items/home/Dashboard";
import Category from "./items/settings/category/category";
import AddItems from "./items/settings/addItems/addItems";
import Profile from "./items/settings/profile";
import Tables from "./items/settings/tables/tables";
import Orders from "./items/home/orders";
import History from "./items/home/history";
import Notifications from "./items/notification/notifications";
import BottomNavBar from "./items/layout/bottomNavBar";
import PrivateRoute from "./items/common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/settings/category"
                  component={Category}
                />
                <PrivateRoute
                  exact
                  path="/settings/additems"
                  component={AddItems}
                />
                <PrivateRoute
                  exact
                  path="/settings/tables"
                  component={Tables}
                />
                <PrivateRoute
                  exact
                  path="/settings/profile"
                  component={Profile}
                />
                <PrivateRoute exact path="/orders" component={Orders} />
                <PrivateRoute exact path="/history" component={History} />
                <PrivateRoute
                  exact
                  path="/notification"
                  component={Notifications}
                />
                <Route exact path="/login" component={Login} />
              </Switch>
              <BottomNavBar />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
