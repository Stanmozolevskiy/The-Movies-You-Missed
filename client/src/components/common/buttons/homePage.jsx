import React from "react";

const HomePage = ({ data }) => {
  function changePage() {
    window.location = data;
  }

  return (
    <i
      className="fa fa-home fa-2x"
      aria-hidden="true"
      style={{ margin: "5px", cursor: "pointer" }}
      onClick={changePage} />
  );
};
export default HomePage;
