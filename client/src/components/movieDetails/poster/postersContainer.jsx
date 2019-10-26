import React from "react";
import ModalForPoster from "./modalForPoster";
import Scroll from "./horizontalScroll";

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
        <Scroll
          data={data.map(x => (
            <ModalForPoster data={x} key={x.file_path} />
          ))}
        />
      </div>
    </div>
  );
};

export default PostersContainer;
