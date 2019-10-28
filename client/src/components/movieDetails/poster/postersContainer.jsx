import React from "react";
import ModalForPoster from "./modalForPoster";
import Scroll from "./horizontalScroll";
import { TouchScrollable } from 'react-scrolllock';

const PostersContainer = ({ data }) => {
  return (
    <div>
      <h4 style={{ marginLeft: "20px" }}>
        <strong>Posters </strong>
      </h4>
      <div
        className="text-center "
        style={{
          overflow: "auto",
          whiteSpace: "nowrap"
        }}
      >
        <TouchScrollable>
          <Scroll
            data={data.map(x => (
              <ModalForPoster data={x} key={x.file_path} />
            ))}
          />
        </TouchScrollable>
      </div>
    </div>
  );
};

export default PostersContainer;
