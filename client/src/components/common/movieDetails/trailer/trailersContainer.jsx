import React from "react";
import ModalForTrailer from "./modalForTrailers";
import Scroll from "./horizontalScroll";

const TrailerContainer = ({ data }) => {
  return (
    <div
      className="text-center "
      style={{
        // backgroundColor: "#333",
        overflow: "auto",
        whiteSpace: "nowrap"
      }}
    >
      <Scroll
        data={data.map(x => (
          <ModalForTrailer key={x.id} data={x} />
        ))}
      />
      {/* {data.map(x => (
        <ModalForTrailer key={x.id} data={x} />
      ))} */}
    </div>
  );
};

export default TrailerContainer;
