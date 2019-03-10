import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage1 from "./components/homepage/HomePage1";
import Header from "./components/common/header/Header1";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage1} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
