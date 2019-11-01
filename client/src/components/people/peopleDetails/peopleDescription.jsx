import React from "react";
import formatDate from "../../../utilities/dataFormat";

const PeopleDescription = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="movie-title">
        {data.name} ({formatDate(data.birthday, "YYYY")})
      </h1>
      <h4> here will be media account if not null</h4>
      <div className="container">
        <div className="row">
          <div className="col-2 "></div>
          <div className="col-12 col-sm-10 multiline-ellipsis-people-modal">
            {data.biography}
          </div>
          <button>open</button>
        </div>
      </div>
      <h6 className="overview">{data.overview}</h6>
    </div>
  );
};

export default PeopleDescription;
