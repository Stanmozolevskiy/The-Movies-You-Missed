import React from "react";
import ModalForCast from "./modalForCast";
import Scroll from "./horizontalScroll";

const CastContainer = ({ data }) => {
  return (
    <div
      className="text-center "
      style={{
        overflow: "auto",
        whiteSpace: "nowrap"
      }}
    >
      <Scroll
        data={data.map(x => (
          <ModalForCast data={x} key={x.name} />
        ))}
      ></Scroll>
      {/* {data.map(x => (
        <ModalForCast data={x} key={x.name} />
      ))} */}
    </div>
  );
};

export default CastContainer;
