import React from "react";
import ModalForTrailer from "./modalForTrailers";
import Scroll from "./horizontalScroll";

const TrailerContainer = ({ data }) => {
  return (
    <div>
      <h4 style={{ marginLeft: "20px" }}>
        <strong> Top Videos:</strong>
      </h4>
      <div
        className="text-center "
        style={{
          overflow: "auto",
          whiteSpace: "nowrap"
        }}
      >
        <Scroll
          data={data.map(x => (
            <ModalForTrailer key={x.id} data={x} />
          ))}
        />
      </div>
    </div>
  );
};

export default TrailerContainer;
