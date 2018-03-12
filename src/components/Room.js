import React, { Component } from "react";

import Person from "./Person";

import { randomInt } from "../helpers/Helpers";

class Room extends Component {
  constructor(props) {
    super(props);
    let people = [];
    for (let i = 0; i < randomInt(30, 60); i++) {
      people.push(<Person key={i} x={randomInt(0, 90)} y={randomInt(0, 90)} />);
    }

    this.state = {
      people
    };
  }

  render() {
    return (
      <div className="room">
        <div className="people">{this.state.people}</div>
      </div>
    );
  }
}

export default Room;
