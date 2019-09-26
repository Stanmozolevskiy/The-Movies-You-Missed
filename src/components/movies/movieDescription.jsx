import React from "react";
import RatingCircle from "../common/ratingCircle";
import formatDate from "../../utilities/dataFormat";
import roundBudjet from "../../utilities/roundBudjet";

const MovieDescription = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>

      <div className="container">
        <div className="row">
          <div className="col-2" style={{ padding: "0px" }}>
            <RatingCircle
              rating={data.vote_average}
              className="rating-movie-detail"
            />
          </div>
          <div className="col-10" style={{ padding: "0px", marginTop: "30px" }}>
            <h6>Date : {formatDate(data.release_date)}</h6>
            <h6>Budget : {roundBudjet(data.budget)}</h6>
            <h6>Genres : {data.genres.map(g => g.name).join(" ")}</h6>
            <h6>Duration : {data.runtime + " m"}</h6>
            <h6>
              Country :{" "}
              {data.production_countries.map(c => c.iso_3166_1).join(" / ")}
            </h6>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h6 style={{ lineHeight: 1.6 }}>{data.overview}</h6>
    </div>
  );
};

export default MovieDescription;
