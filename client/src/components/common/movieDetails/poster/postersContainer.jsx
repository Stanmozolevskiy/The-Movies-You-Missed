import React from "react";
import ModalForPoster from "./modalForPoster";
import Scroll from "./horizontalScroll";

const PostersContainer = ({ data }) => {
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
          <ModalForPoster data={x} key={x.file_path} />
        ))}
      />
      {/* {data.map(x => (
        <ModalForPoster data={x} key={x.file_path} />
      ))} */}
    </div>
  );
};

export default PostersContainer;
