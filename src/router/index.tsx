import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/Index";
import About from "../components/About";
import User from "../components/User";
import Topic from "../components/Topic";
import Tutorial from "../components/Tutorial";

export default class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/index" />
        <Route path="/index/:section" component={Index} />
        <Route path="/About" component={About} />
        <Route path="/User" component={User} />
        <Route path="/Topic" component={Topic} />
        <Route path="/Tutorial" component={Tutorial} />
        <Route component={Index} />
      </Switch>
    );
  }
}
