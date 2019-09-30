import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InstagramIcon = ({ data }) => {
  function changePage() {
    window.location = `https://www.imdb.com/title/${data}/?ref_=inth_ov_i`;
  }

  return (
    <FontAwesomeIcon
      icon={faCamera}
      size="2x"
      style={{ margin: "5px" }}
      onClick={changePage}
    />
  );
};

export default InstagramIcon;
