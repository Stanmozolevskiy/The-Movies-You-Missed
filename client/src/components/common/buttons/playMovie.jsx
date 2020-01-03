import React from "react";

const PlayMovie = ({ data, year }) => {
  function changePage() {
    window.open(
      `https://www.amazon.com/s?k=${data}+%28${year}%29&i=shop-instant-video&ref=nb_sb_noss_2`,
      "_blank"
    );
  }
  return (
    <div onClick={changePage}>
      <h3
        className="filters"
        style={{ textAlign: "center", cursor: "pointer", marginTop: "60px" }}
      >
        Find on Amazon:
        <i
          className="fa fa-amazon fa-1x"
          aria-hidden="true"
          style={{ margin: "5px", color: "gold" }}
        />
      </h3>
    </div>
  );
};

export default PlayMovie;
