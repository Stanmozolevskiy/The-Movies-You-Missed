import React from "react";
import RatingCircle from "./ratingCircle";
import formatDate from "../../utilities/dataFormat";
import IconsForMoVieDescription from './buttons/iconsForMoVieDescription'

const MovieDescription = ({ data, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div>
        <h1>
          {data.title} ({formatDate(data.release_date, "YYYY")})
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-2" style={{ padding: "0px" }}>
              <RatingCircle
                rating={data.vote_average}
                className="rating-movie-detail"
              />
            </div>
            <div
              className="col-10"
              style={{ padding: "0px", marginTop: "30px" }}
            >
              <IconsForMoVieDescription />
            </div>
          </div>
        </div>
        <br />
        <br />
        <h6 style={{ lineHeight: 1.6 }}>{data.overview}</h6>
      </div>
    );
  } else {
    // Details for TV show (because of inconsistant API)
    return (
      <div>
        <h1>
          {data.name} ({formatDate(data.first_air_date, "YYYY")})
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-2" style={{ padding: "0px" }}>
              <RatingCircle
                rating={data.vote_average}
                className="rating-movie-detail"
              />
            </div>
            <div
              className="col-10"
              style={{ padding: "0px", marginTop: "30px" }}
            >
              <h6>Date : {formatDate(data.first_air_date)}</h6>
              <h6>
                Created By : {data.created_by.map(x => x.name).join(" , ")}
              </h6>
              <h6>Genres : {data.genres.map(g => g.name).join(" , ")}</h6>
              <h6>
                Average duration :{" "}
                {(
                  data.episode_run_time.reduce((a, b) => a + b) /
                  data.episode_run_time.length
                ).toFixed(0) + " m"}
              </h6>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h6 style={{ lineHeight: 1.6 }}>{data.overview}</h6>
      </div>
    );
  }
};

export default MovieDescription;
