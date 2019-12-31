import React from "react";
import formatDate from "../../utilities/dataFormat";
import { numberWithCommas } from "../../utilities/roundBudjet";

const MovieGeneralDetails = ({ data, props }) => {
  if (/movies/.test(props.location.pathname)) {
    const onClick = (data) => {
      window.location = `/genres/${data.id}`
    };
    return (
      <div className="row">
        <div
          className="col-12"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <hr />
          <h6>Release Date : </h6>
          <h5> {formatDate(data.release_date, "MMMM DD YYYY ")}</h5>
          <h6>Country : </h6>
          <h5>{data.production_countries.map(c => c.name).join(" and ")}</h5>
          <br />
          <h6>Budget :</h6>
          <h5>${numberWithCommas(data.budget)}</h5>
          <h6>Profit : </h6>
          <h5>${numberWithCommas(data.revenue)}</h5>
          <br />
          <h6>Genres : </h6>
          {data.genres.map(g => (
            <h5 key={g.name} className="title-tag"
              onClick={() => onClick(g)}>
              {g.name}
            </h5>
          ))}
          <br />
          <br />
          <h6>Duration : </h6>
          <h5>{data.runtime + " minutes"}</h5>
          <br />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div
          className="col-12"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <hr />
          <h6>Release Date : </h6>
          <h5> {formatDate(data.first_air_date, "MMMM DD YYYY ")}</h5>
          <h6>Last Season :</h6>
          <h5> {formatDate(data.last_air_date, "MMMM DD YYYY ")}</h5>
          <br />
          <h6>Country : </h6>
          <h5>{data.origin_country.map(c => c).join(" and ")}</h5>
          <h6>Duration : </h6>
          <h5>{data.episode_run_time + " minutes"}</h5>
          <br />
          <h6>Genres : </h6>
          {data.genres.map(g => (
            <h5 key={g.name} className="title-tag">
              {g.name}
            </h5>
          ))}
          <br />
          <br />
          <h6>Number of Seasons : </h6>
          <h5>{data.number_of_seasons}</h5>
          <br />
        </div>
      </div>
    );
  }
};

export default MovieGeneralDetails;
