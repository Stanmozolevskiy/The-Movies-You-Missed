import React from "react";
import SmallPeopleCard from "../people/smapPeopleCard";

const MovieDetailBody = ({ data, props }) => {
  return (
    <div className="row">
      <div className="col-9">9</div>
      <div className="col-3 movie-body-right">
        <SmallPeopleCard
          data={data.credits.crew.filter(x => x.job === "Director")[0]}
          props={props}
          dataTv={data}
        />

        <SmallPeopleCard
          data={data.credits.crew.filter(x => x.job === "Producer")[0]}
          props={props}
        />
        <br />
      </div>
    </div>
  );
};

export default MovieDetailBody;
