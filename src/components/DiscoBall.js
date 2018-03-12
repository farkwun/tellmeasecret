import React, { Component } from "react";


class DiscoBall extends Component {
  render() {
    return (
      <div
        className="discoball"
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}

export default DiscoBall;
