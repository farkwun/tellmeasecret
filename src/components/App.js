import React, { Component } from "react";
import logo from "../data/img/logo.svg";

import Room from "./Room";

class App extends Component {
  render() {
    return (
      <div className="App centered">
        tell me a secret
        <Room />
      </div>
    );
  }
}

export default App;
