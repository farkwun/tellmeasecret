import React, { Component } from "react";

import Person from "./Person";
import DiscoBall from "./DiscoBall";

import {
  randomInt,
  boundedVal,
  range,
  permuteSlightly
} from "../helpers/Helpers";

import { CSS_COLOR_NAMES } from "../data/static";

const STEP = 0.2;

class Room extends Component {
  constructor(props) {
    super(props);

    this.player = {
      x: boundedVal(0, 98)(
        this.getX(this.props.position.x, this.props.elementDimensions.width)
      ),
      y: boundedVal(0, 98)(
        this.getY(this.props.position.y, this.props.elementDimensions.height)
      )
    };

    const people = range(150).map(i => ({
      x: randomInt(2, 90),
      y: randomInt(2, 90)
    }));

    setInterval(() => {
      this.walkPeople();
    }, 50);

    setInterval(() => {
      this.changeColor();
    }, 100);

    const color =
      CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];

    this.state = {
      people,
      color
    };
  }

  getX = (x, width) => boundedVal(0, 98)(x / width * 100);

  getY = (y, height) => boundedVal(0, 95)((height - y) / height * 100);

  changeColor = () =>
    this.setState({
      color: CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]
    });

  walkPeople = () => {
    const people = this.state.people.map(p => {
      const vec = this.getVector(this.player.x, this.player.y, p.x, p.y);
      return vec.distance < 10
        ? {
            x: boundedVal(2, 96)(p.x + vec.vector.x * STEP * 4),
            y: boundedVal(2, 93)(p.y + vec.vector.y * STEP * 4)
          }
        : {
            x: boundedVal(2, 96)(permuteSlightly(p.x, STEP)),
            y: boundedVal(2, 93)(permuteSlightly(p.y, STEP))
          };
    });

    this.setState({
      people
    });
  };

  getUnitVector = (p1, p2) => (p2 - p1) / Math.abs(p2 - p1);

  getVector = (x1, y1, x2, y2) => ({
    distance: Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)),
    vector: { x: this.getUnitVector(x1, x2), y: this.getUnitVector(y1, y2) }
  });

  render() {
    this.player.x = boundedVal(0, 98)(
      this.getX(this.props.position.x, this.props.elementDimensions.width)
    );
    this.player.y = boundedVal(0, 98)(
      this.getY(this.props.position.y, this.props.elementDimensions.height)
    );

    const people = this.state.people.map(p => {
      //      const vec = this.getVector(player_x, player_y, p.x, p.y);
      //      return vec.distance < 5 ? (
      //        <Person x={p.x + vec.vector.x} y={p.y + vec.vector.y} />
      //      ) : (
      //        <Person x={p.x} y={p.y} />
      //      );
      //      if (vec.distance < 5) {
      //        console.log(vec.vector);
      //      }
      return <Person x={p.x} y={p.y} />;
    });

    return (
      <div className="room">
        <DiscoBall color={this.state.color} />
        <div className="people">{people}</div>
        <Person key={"player"} x={this.player.x} y={this.player.y} />
      </div>
    );
  }
}
export default Room;
