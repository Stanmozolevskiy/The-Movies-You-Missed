import React, { Component } from "react";
import ModalForCast from "./modalForCast";
import Scroll from "./horizontalScroll";
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

class CastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lockScroll: false }
  }
  render() {
    return (
      <div
        className='scrolable'>
        <h4 style={{ marginLeft: "20px" }}>
          <strong> Top cast:</strong>
        </h4>
        <div
          className="text-center"
          style={{
            overflow: "auto",
            whiteSpace: "nowrap"
          }}
        >
          <TouchScrollable>
            <Scroll
              data={this.props.data.map(x => (
                <ModalForCast data={x} key={x.name} />
              ))}
            ></Scroll>
          </TouchScrollable>
        </div>
        <ScrollLock isActive={this.state.lockScroll} />
      </div>
    );
  }
}

export default CastContainer;

