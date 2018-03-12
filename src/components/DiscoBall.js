import React, { Component } from "react";

class DiscoBall extends Component {
  render() {
    return (
      <div className="disco-box">
        <div
          className="discoball"
          style={{ backgroundColor: this.props.color }}
        />
      </div>
    );
  }
}

export default DiscoBall;
