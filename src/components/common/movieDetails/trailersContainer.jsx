import React from "react";
import YouTube from "react-youtube";

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
        <div
          key={x.id}
          className="text-center "
          style={{
            display: "inline-block",
            color: "white",
            margin: "10px"
          }}
        >
          <img
            src={`https://img.youtube.com/vi/${x.key}/mqdefault.jpg`}
            alt=""
            style={{ height: "240px", width: "auto" }}
          />
          {/* <YouTube
            
            videoId={x.key}
            style={{
              height: "150px",
              width: "200px",
              playerVars: {
                autoplay: 0
              }
            }}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default TrailerContainer;
