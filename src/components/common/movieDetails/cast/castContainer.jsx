import React from "react";
import ModalForCast from "./modalForCast";

const CastContainer = ({ data }) => {
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
        <ModalForCast data={x} key={x.name} />
      ))}
    </div>
  );
};

export default CastContainer;
