import React, { Component } from "react";

import cursor from "../data/img/cursor.png";

import { randomInt } from "../helpers/Helpers";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: randomInt(0, 90) + "%",
      left: randomInt(0, 90) + "%"
    };
  }
  render() {
    const style = { bottom: this.state.bottom, left: this.state.left };
    return <img className="person" style={style} src={cursor} />;
  }
}

export default Person;
