import React from "react";

const IMDBIcon = ({ data }) => {
  function changePage() {
    window.location = `https://www.imdb.com/title/${data}/?ref_=inth_ov_i`;
  }

  return (
    <i
      className="fa fa-imdb fa-2x"
      aria-hidden="true"
      style={{ margin: "5px", cursor: "pointer" }}
      onClick={changePage} />
  );
};

export default IMDBIcon;
