import React from "react";
import formatDate from "../../utilities/dataFormat";
import IconsForMoVieDescription from "../common/buttons/iconsForMoVieDescription";
import PlayMovie from "../common/buttons/playMovie";
import Rating from "react-rating";
import starColor from "../../utilities/starColor";

const MovieDescription = ({ data, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div>
        <h1 className="movie-title">
          {data.title} ({formatDate(data.release_date, "YYYY")})
          <Rating
            style={{
              color: starColor(data.vote_average / 2),
              fontSize: "12px",
              marginLeft: "2%"
            }}
            initialRating={data.vote_average / 2}
            emptySymbol={"fa fa-star-o fa-2x "}
            fullSymbol={"fa fa-star fa-2x "}
            start="0"
            stop="5"
            step="1"
            readonly="false"
          />
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-2 "></div>
            <div className="col-12 col-sm-10 movie-details-buttons">
              <IconsForMoVieDescription />
            </div>
          </div>
        </div>
        <h6 className="overview">{data.overview}</h6>
        <PlayMovie
          data={data.title}
          year={formatDate(data.release_date, "YYYY")}
        />
      </div>
    );
  } else {
    // Details for TV show (because of inconsistant API)
    return (
      <div>
        <h1 className="movie-title">
          {data.name} ({formatDate(data.first_air_date, "YYYY")})
          <Rating
            style={{
              color: starColor(data.vote_average / 2),
              fontSize: "12px",
              marginLeft: "2%"
            }}
            initialRating={data.vote_average / 2}
            emptySymbol={"fa fa-star-o fa-2x "}
            fullSymbol={"fa fa-star fa-2x "}
            start="0"
            stop="5"
            step="1"
            readonly="false"
          />
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-2" style={{ padding: "0px" }}></div>
            <div className="col-12 col-sm-10 movie-details-buttons">
              <IconsForMoVieDescription />
            </div>
          </div>
        </div>
        <h6 className="overview">{data.overview}</h6>
        <PlayMovie
          data={data.title}
          year={formatDate(data.first_air_date, "YYYY")}
        />
      </div>
    );
  }
};

export default MovieDescription;
