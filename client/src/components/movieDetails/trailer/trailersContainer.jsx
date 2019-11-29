import React from "react";
import ModalForTrailer from "./modalForTrailers";
import Scroll from "./horizontalScroll";
import { TouchScrollable } from 'react-scrolllock';

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
        {/* <TouchScrollable>
          <Scroll */}
            {data.map(x => (
              <ModalForTrailer key={x.id} data={x} />
            ))}
          {/* />
        </TouchScrollable> */}
      </div>
    </div>
  );
};

export default TrailerContainer;
