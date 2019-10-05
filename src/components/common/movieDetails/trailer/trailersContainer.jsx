import React from "react";
import ModalForTrailer from "./modalForTrailers";

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
      {data.map(x => (
        <ModalForTrailer key={x.id} data={x} />
      ))}
    </div>
  );
};

export default TrailerContainer;
