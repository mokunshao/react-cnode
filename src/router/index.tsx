import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/Index";
import About from "../components/About";
import User from "../components/User";
import Detail from "../components/Detail";
import Tutorial from "../components/Tutorial";

export default class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/index" />
        <Route path="/index" component={Index} />
        <Route path="/About" component={About} />
        <Route path="/User" component={User} />
        <Route path="/Detail" component={Detail} />
        <Route path="/Tutorial" component={Tutorial} />
        <Route component={Index} />
      </Switch>
    );
  }
}
