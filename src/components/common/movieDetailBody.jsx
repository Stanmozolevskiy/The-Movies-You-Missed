import React from "react";
import SmallPeopleCard from "../people/smapPeopleCard";
import ProductionCompanieIcons from "./productionCompanieIcons";

const MovieDetailBody = ({ data, props }) => {
  console.log(data)
  if (/movies/.test(props.location.pathname)) {
    return (
      <div className="row">
        <div className="col-9">
          <div className="col-12">

            <ProductionCompanieIcons data={data.production_companies} style={{ display: 'flex' }} />

            <hr />
          </div>

        </div>
        <div className="col-3 movie-body-right">
          <SmallPeopleCard
            data={data.credits.crew.filter(x => x.job === "Director")[0]}
            props={props}
          />

          <SmallPeopleCard
            data={data.credits.crew.filter(x => x.job === "Producer")[0]}
            props={props}
          />

        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-9">
          <div className="col-12">

            <ProductionCompanieIcons data={data.production_companies} style={{ display: 'flex' }} />

            <hr />
          </div>

        </div>
        <div className="col-3 movie-body-right">
          <div className="row">

            <div className="col-3"></div>

          </div>
          <SmallPeopleCard
            props={props}
            dataTv={data.created_by[0]}
          />

        </div>
      </div>
    );

  }
};

export default MovieDetailBody;
