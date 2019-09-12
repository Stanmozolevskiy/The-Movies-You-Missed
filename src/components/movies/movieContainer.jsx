import React from "react";

const MovieContainer = ({ data }) => {
  return (
    <div
      className=" container-size card mb-3 col-5 m-3 mx-auto"
      style={{ padding: 0 }}
    >
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
            className="card-img image-fit"
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text d-inline-block  multiline-ellipsis">
              {data.overview}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
