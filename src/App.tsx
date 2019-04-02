import React, { Component } from "react";
import "./App.scss";
import RouterIndex from "./router/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterIndex />
        <Footer />
      </div>
    );
  }
}

export default App;
