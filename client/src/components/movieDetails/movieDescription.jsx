import React from "react";
import RatingCircle from "../common/ratingCircle";
import formatDate from "../../utilities/dataFormat";
import IconsForMoVieDescription from "../common/buttons/iconsForMoVieDescription";
import PlayMovie from "../common/buttons/playMovie";

const MovieDescription = ({ data, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div>
        <h1 className='movie-title'>
          {data.title} ({formatDate(data.release_date, "YYYY")})
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-2 " style={{ padding: "0px" }}>
              <RatingCircle
                rating={data.vote_average}
                className="rating-movie-detail filters"
              />
            </div>
            <div
              className="col-12 col-sm-10 movie-details-buttons" >
              <IconsForMoVieDescription />
            </div>
          </div>
        </div>
        <h6 className='overview'>{data.overview}</h6>
        <PlayMovie />
      </div>
    );
  } else {
    // Details for TV show (because of inconsistant API)
    return (
      <div>
        <h1 className='movie-title'>
          {data.name} ({formatDate(data.first_air_date, "YYYY")})
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-2" style={{ padding: "0px" }}>
              <RatingCircle
                rating={data.vote_average}
                className="rating-movie-detail filters"
              />
            </div>
            <div
              className="col-12 col-sm-10 movie-details-buttons" >
              <IconsForMoVieDescription />
            </div>
          </div>
        </div>
        <h6 className='overview'>{data.overview}</h6>
        <PlayMovie />
      </div>
    );
  }
};

export default MovieDescription;
