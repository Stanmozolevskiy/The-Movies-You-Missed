import React, { Component } from "react";

const ModalForTrending = ({ props, data }) => {
  const onClick = () => {
    window.location = `/movies/${data.id}`
  };
  return (
    <div
      className="text-center hover-red"
      style={{
        display: "inline-block",
        margin: "10px",
        color: "white",
        minWidth: "40px !important"
      }}
    >
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
          style={{
            width: "120px",
            maxHeight: "300px",
            cursor: "pointer"
          }}
          className="poster-container"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ModalForTrending;
