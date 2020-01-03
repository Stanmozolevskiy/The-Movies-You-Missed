import React from "react";
import ReactImageAppear from "react-image-appear";

const Image = ({ imageId }) => {
  return (
    <div className="movie-description-container mobile">
      <ReactImageAppear
        className="movie-description-image mobile-image"
        src={`https://image.tmdb.org/t/p/original/${imageId}`}
        animation="blurIn"
        animationDuration="1s"
        showLoader={false}
        easing="ease"
      />
    </div>
  );
};

export default Image;
