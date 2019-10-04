import React from "react";

const PlayMovie = ({ data }) => {
  function changePage() {
    window.location = `https://www.imdb.com/title/${data}/?ref_=inth_ov_i`;
  }

  return (
    <div>
      <h3 style={{ textAlign: "center", cursor: "pointer" }}>
        Rent the movei
        <i
          className="fa fa-video-camera fa-2x"
          aria-hidden="true"
          style={{ margin: "5px" }}
          onClick={changePage}
        />
      </h3>
    </div>
  );
};

export default PlayMovie;
