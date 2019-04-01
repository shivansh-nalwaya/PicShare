import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" exact render={props => <Home {...props} />} />
      </Router>
    );
  }
}
