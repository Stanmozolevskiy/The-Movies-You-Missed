import React from "react";
import { Link } from "react-router-dom";
import RatingCircle from "./ratingCircle";
import formatDate from "../../utilities/dataFormat";

const title = (data) => {
  if (data !== undefined) {
    return data.length >= 28
      ? data.slice(0, 28) + "..."
      : data
  }
  return
}

const MovieContainer = ({ data, props }) => {
  return (
    <div
      className="container card mb-3 col-5 card-mobile"
      style={{ padding: 0, display: "inline-flex" }}
    >
      <div className="row no-gutters">
        <div className="col-md-5">
          {/* work around for container path*/}
          <Link
            to={
              props === "movies"
                ? "/movies/" + data.id
                : `${props.history.location.pathname}/${data.id}`
            }
          >
            <img
              src={
                data.poster_path === null
                  ? window.location.origin + "/no-image-movie.png"
                  : `https://image.tmdb.org/t/p/w300${data.poster_path}`
              }
              className="card-img image-fit"
              alt="..."
            />
          </Link>
        </div>
        <div className="col-md-7">
          <div className="card-body" style={{ padding: "10px" }}>
            <div className="container">
              <div className="row">
                <div className="col-4 circle" style={{ marginBottom: "5px" }}>
                  <RatingCircle
                    rating={data.vote_average}
                    className="rating-movie-card"
                  />
                </div>
                <div
                  className="col-12 col-sm-8"
                  style={{
                    padding: 0,
                    verticalAlign: "top"
                  }}
                >
                  <strong style={{ marginBottom: 0 }}>
                    {title(data.original_title) || title(data.original_name)}
                  </strong> ({formatDate(data.release_date || data.first_air_date, 'YYYY')})
                  <p style={{ marginBottom: "10px", }}>

                  </p>
                </div>
              </div>
            </div>

            <p className="card-text multiline-ellipsis filters">
              {data.overview}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-12 detail" style={{ textAlign: "center" }}>
                  <hr />
                  <Link to={`/movie/${data.id}`}>Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;


// {data.original_title.length >= 30
//   ? data.original_title.slice(0, 25) + "..."
//   : data.original_title || data.original_name.length >= 30
//     ? data.original_name.slice(0, 25) + "..."
//     : data.original_name}