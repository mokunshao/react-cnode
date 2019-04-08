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
        <Redirect exact from="/" to="/index/all" />
        <Redirect exact from="/index" to="/index/all" />
        <Route path="/index/:section" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/user/:loginname" component={User} />
        <Route path="/topic/:id" component={Topic} />
        <Route path="/tutorial" component={Tutorial} />
        <Route component={Index} />
      </Switch>
    );
  }
}
