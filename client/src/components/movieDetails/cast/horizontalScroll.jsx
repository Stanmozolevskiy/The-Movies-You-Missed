import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class Scroll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <ScrollMenu
          alignCenter={false}
          alignOnResize={false}
          wheel={false}
          clickWhenDrag={false}
          data={this.props.data}
          dragging={true}
          selected={false}
          transition={1.2 }
          inertiaScrolling={1}
          hideArrows={true}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          onSelect={this.onSelect}
          hideSingleArrow={true}
        />
      </div>
    );
  }
}

export default Scroll;
