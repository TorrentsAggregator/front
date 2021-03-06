import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard";
import Movies from "./containers/Movies";
import Profil from "./containers/Profil";

import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <AppliedRoute path="/movies" exact component={Movies} props={childProps} />
    <AppliedRoute path="/profil" exact component={Profil} props={childProps} />
    { /* <AppliedRoute path="/signup" exact component={Signup} props={childProps} */ }
    <Route component={NotFound} />
  </Switch>;
