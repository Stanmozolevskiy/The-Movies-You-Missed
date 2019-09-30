import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = ({ data }) => {
  function changePage() {
    window.location = data;
  }

  return (
    <FontAwesomeIcon
      icon={faHome}
      size="2x"
      style={{ margin: "5px", cursor: "pointer" }}
      onClick={changePage}
    />
  );
};

export default HomePage;
