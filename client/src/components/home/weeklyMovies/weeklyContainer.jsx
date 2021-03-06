import React, { Component } from "react";
import ModalForWeekly from "./modalForWeekly";

class WeeklyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lockScroll: false };
  }
  render() {
    return (
      <div className="scrolable">
        <h2 style={{ textAlign: "center" }}>
          <strong> In Theaters</strong>
        </h2>
        <div
          className="text-center home-shadow"
          style={{
            overflow: "auto",
            whiteSpace: "nowrap"
          }}
        >
          {this.props.data.map(x => (
            <ModalForWeekly data={x} key={x.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default WeeklyContainer;
