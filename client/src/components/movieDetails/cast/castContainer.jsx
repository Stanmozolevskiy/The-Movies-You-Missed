import React from "react";
import ModalForCast from "./modalForCast";
import Scroll from "./horizontalScroll";

const CastContainer = ({ data }) => {
  return (
    <div>
      <h4 style={{ marginLeft: "20px" }}>
        <strong> Top cast:</strong>
      </h4>
      <div
        className="text-center"
        style={{
          // overflow: "auto",
          overflowX: 'hidden',
          whiteSpace: "nowrap"
        }}
      >
        <Scroll
          data={data.map(x => (
            <ModalForCast data={x} key={x.name} />
          ))}
        ></Scroll>
      </div>
    </div>
  );
};

export default CastContainer;
