import React from "react";
import { Link } from "react-router-dom";
import RatingCircle from "./ratingCircle";
import formatDate from "../../utilities/dataFormat";

const MovieContainer = ({ data, props, size = "col-md-5" }) => {
  return (
    <div
      className={`card col-5 col-sm-3 ${size} card-mobile`}
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
          <div className="card-body">
            {/* <div className="container"> */}
            {/* <div className="row" style={{ padding: "0px" }}> */}
            <div className="col-12 circle" style={{ marginBottom: "5px" }}>
              <RatingCircle
                rating={data.vote_average}
                className="rating-movie-card"
              />
            </div>
            <div
              className="col-md-12 text-center"
              style={{
                padding: 0,
                marginBottom: "5px"
              }}
            >
              <strong className="card-title">
                {data.original_title || data.original_name}
              </strong>{" "}
              ({formatDate(data.release_date || data.first_air_date, "YYYY")})
            </div>
            {/* </div> */}
            {/* </div> */}

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
