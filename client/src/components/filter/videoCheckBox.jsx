import React from "react";

const VideoCheckBox = () => {
  return (
    <div className="form-check">
      <input
        style={{ marginRight: "5px" }}
        className="form-check-input position-static"
        type="checkbox"
        id="videos"
        value="checkeв"
      />

      <label
        className="form-check-label"
        htmlFor="videos"
        style={{ color: "gray" }}
      >
        With Videos
      </label>
    </div>
  );
};

export default VideoCheckBox;
