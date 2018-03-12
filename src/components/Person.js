import React, { Component } from "react";

import cursor from "../data/img/cursor.png";

class Person extends Component {
  render() {
    const style = { bottom: this.props.y + "%", left: this.props.x + "%" };
    return <img className="person" style={style} src={cursor} />;
  }
}

export default Person;
