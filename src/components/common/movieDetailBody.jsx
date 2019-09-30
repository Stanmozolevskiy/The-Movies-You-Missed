import React from "react";
import SmallPeopleCard from "../people/smapPeopleCard";
import ProductionCompanieIcons from "./productionCompanieIcons";
import MovieGeneralDetails from "./movieGeneralDetails";
import HomePage from "./buttons/homePage";
import SmallPeopleCardCast from "./smalPeopleCardCast";
import InstagramIcon from "./buttons/instagramIcon";

const MovieDetailBody = ({ data, props }) => {
  console.log(data);
  if (/movies/.test(props.location.pathname)) {
    return (
      // LEFT SIDE
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-12 ">
              <ProductionCompanieIcons
                data={data.production_companies.filter(
                  x => x.logo_path !== null
                )}
                style={{ display: "flex" }}
              />
              <hr />
            </div>
          </div>
          <div className="row">
            <SmallPeopleCardCast
              props={props}
              data={data.credits.cast.filter(x => x.order < 5)}
            />
          </div>
        </div>
        {/*  RIGHT SIDE */}
        <div className="col-3 movie-body-right">
          <SmallPeopleCard
            data={data.credits.crew.filter(x => x.job === "Director")[0]}
            props={props}
          />
          <div className="row">
            <div className="col-2"></div>

            <div className="col-6">
              <HomePage data={data.homepage} />
              <InstagramIcon data={data.imdb_id} />
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8">
              <MovieGeneralDetails data={data} props={props} />
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //  LEFT SIDE
      <div className="row">
        <div className="col-9">
          <div className="col-12">
            <ProductionCompanieIcons
              data={data.production_companies.filter(x => x.logo_path !== null)}
              style={{ display: "flex" }}
            />
            <hr />
          </div>
          <div className="row">
            <SmallPeopleCardCast
              props={props}
              data={data.credits.cast.filter(x => x.order < 5)}
            />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="col-3 movie-body-right">
          <div className="row">
            <div className="col-3"></div>
          </div>
          <SmallPeopleCard props={props} dataTv={data.created_by[0]} />
          <div className="row">
            <div className="col-2"></div>

            <div className="col-6">
              <HomePage data={data.homepage} />
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8">
              <MovieGeneralDetails data={data} props={props} />
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetailBody;
