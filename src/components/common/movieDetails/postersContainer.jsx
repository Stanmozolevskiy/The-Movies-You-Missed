import React from "react";

const PostersContainer = ({ data }) => {
  console.log(data);
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
        <div
          key={x.file_path}
          className="text-center "
          style={{
            display: "inline-block",
            color: "white",
            margin: "10px"
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${x.file_path}`}
            style={{ maxWidth: "400px", maxHeight: "300px" }}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default PostersContainer;
