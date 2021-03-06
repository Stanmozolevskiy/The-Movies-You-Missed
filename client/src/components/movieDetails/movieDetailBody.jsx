import React from "react";
import SmallPeopleCard from "../people/smapPeopleCard";
import ProductionCompanieIcons from "../common/productionCompanieIcons";
import MovieGeneralDetails from "../movieDetails/movieGeneralDetails";
import HomePage from "../common/buttons/homePage";
import IMDBIcon from "../common/buttons/imdb";
import InstagramIcon from "../common/buttons/instagram";
import FacebookIcon from "../common/buttons/facebookIcon";
import Twitter from "../common/buttons/twittwe";
import TrailerContainer from "./trailer/trailersContainer";
import Collection from "../movies/collection";
import PostersContainer from "./poster/postersContainer";
import CommentsBody from "../comments/commentsBody";
import CastContainer from "./cast/castContainer";
import TrendingContainer from "./trending/trendingContainer";

const MovieDetailBody = ({ data, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      // LEFT SIDE
      <div
        className="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        <div className="col-12 col-sm-9">
          <div className="row movie-body-unit">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
              <CastContainer
                props={props}
                data={data.credits.cast.filter(x => x.order < 15)}
              />
            </div>
          </div>
          {data.videos.results.length <= 1 ? (
            ""
          ) : (
            <div className="row movie-body-unit">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
                <TrailerContainer
                  props={props}
                  data={data.videos.results.splice(
                    1,
                    data.videos.results.length
                  )}
                />
              </div>
            </div>
          )}
          <div className="row movie-body-unit ">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
              <PostersContainer data={data.images.backdrops.splice(0, 12)} />
            </div>
          </div>
          {/* <CommentsBody data={data.reviews.results} /> */}
          <div className="row ">
            <div className="col-12" style={{ padding: "0px" }}>
              <Collection data={data.belongs_to_collection} />
            </div>
          </div>
        </div>
        {/*  RIGHT SIDE */}
        <div className="col-12 col-sm-3 movie-body-right">
          <SmallPeopleCard
            data={data.credits.crew.filter(x => x.job === "Director")[0]}
            props={props}
          />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8" style={{ marginLeft: "20px" }}>
              <HomePage data={data.homepage} />
              <IMDBIcon data={data.imdb_id} />
              <FacebookIcon data={data.external_ids.facebook_id} />
              <InstagramIcon data={data.external_ids.instagram_id} />
              <Twitter data={data.external_ids.twitter_id} />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <MovieGeneralDetails data={data} props={props} />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row movie-body-unit">
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
          <div className="row movie-body-unit">
            <TrendingContainer id={data.id} props={props} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //  LEFT SIDE
      <div
        className="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        <div className="col-12 col-sm-9">
          <div className="row movie-body-unit">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
              <CastContainer
                props={props}
                data={data.credits.cast.filter(x => x.order < 9)}
              />
            </div>
          </div>
          {data.videos.results.length <= 1 ? (
            ""
          ) : (
            <div className="row movie-body-unit">
              <div className="col-0 col-sm-2"></div>
              <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
                <TrailerContainer
                  props={props}
                  data={data.videos.results.splice(
                    1,
                    data.videos.results.length
                  )}
                />
              </div>
            </div>
          )}
          <div className="row movie-body-unit ">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10" style={{ padding: "0px" }}>
              <PostersContainer data={data.images.backdrops.splice(0, 12)} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-sm-3 movie-body-right">
          <SmallPeopleCard props={props} dataTv={data.created_by[0]} />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8" style={{ marginLeft: "20px" }}>
              <HomePage data={data.homepage} />
              <IMDBIcon data={data.imdb_id} />
              <FacebookIcon data={data.external_ids.facebook_id} />
              <InstagramIcon data={data.external_ids.instagram_id} />
              <Twitter data={data.external_ids.twitter_id} />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <MovieGeneralDetails data={data} props={props} />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row movie-body-unit">
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
          <div className="row movie-body-unit">
            <TrendingContainer id={data.id} props={props} />
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetailBody;
