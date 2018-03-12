import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";

import logo from "../data/img/logo.svg";

import Room from "./Room";

class App extends Component {
  render() {
    return (
      <div className="App centered">
        tell me a secret
        <ReactCursorPosition>
          <Room />
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
