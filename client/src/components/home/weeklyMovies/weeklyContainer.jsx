import React, { Component } from "react";
import ModalForWeekly from "./modalForWeekly";
import Scroll from "./horizontalScroll";
import { TouchScrollable } from "react-scrolllock";

class WeeklyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lockScroll: false };
  }
  render() {
    return (
      <div className="scrolable">
        <h4>
          <strong> In Theaters</strong>
        </h4>
        <div
          className="text-center"
          style={{
            overflow: "auto",
            whiteSpace: "nowrap"
          }}
        >
          {/* <TouchScrollable> */}
          {/* <Scroll */}

          {this.props.data.map(x => (
            <ModalForWeekly data={x} key={x.name} />
          ))}

          {/* ></Scroll> */}
          {/* </TouchScrollable> */}
        </div>
      </div>
    );
  }
}

export default WeeklyContainer;
