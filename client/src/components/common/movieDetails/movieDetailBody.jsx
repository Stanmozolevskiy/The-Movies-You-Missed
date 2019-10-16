import React from "react";
import SmallPeopleCard from "../../people/smapPeopleCard";
import ProductionCompanieIcons from "../productionCompanieIcons";
import MovieGeneralDetails from "../movieDetails/movieGeneralDetails";
import HomePage from "../buttons/homePage";
import IMDBIcon from "../buttons/imdb";
import InstagramIcon from "../buttons/instagram";
import FacebookIcon from "../buttons/facebookIcon";
import Twitter from "../buttons/twittwe";
import TrailerContainer from "./trailer/trailersContainer";
import Collection from "../../movies/collection";
import PostersContainer from "./poster/postersContainer";
import CommentsBody from "../../comments/commentsBody";
import CastContainer from "./cast/castContainer";

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
            <div className="col-2"></div>
            <div className="col-10" style={{ padding: "0px" }}>
              <h3>Top cast:</h3>
              <CastContainer
                props={props}
                data={data.credits.cast.filter(x => x.order < 15)}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          {data.videos.results.length <= 1 ? (
            ""
          ) : (
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10" style={{ padding: "0px" }}>
                <h3>Videos and Trailers</h3>
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
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10" style={{ padding: "0px" }}>
              <h3>Posters</h3>
              <PostersContainer data={data.images.backdrops.splice(0, 12)} />
            </div>
          </div>
          <br />
          <CommentsBody data={data.reviews.results} />
          <br />
          <br />
          <div className="row">
            <div className="col-12" style={{ padding: "0px" }}>
              <Collection data={data.belongs_to_collection} />
            </div>
          </div>
          <br />
          <br />
          <br />
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
              <IMDBIcon data={data.imdb_id} />
              <FacebookIcon data={data.external_ids.facebook_id} />
              <InstagramIcon data={data.external_ids.instagram_id} />
              <Twitter data={data.external_ids.twitter_id} />
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
      <div
        className="row"
        style={{
          marginLeft: "0px",
          marginRight: "0px"
        }}
      >
        <div className="col-9">
          <div className="col-12">
            <ProductionCompanieIcons
              data={data.production_companies.filter(x => x.logo_path !== null)}
              style={{ display: "flex" }}
            />
            <hr />
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col-10" style={{ padding: "0px" }}>
              <h3>Top cast:</h3>
              <CastContainer
                props={props}
                data={data.credits.cast.filter(x => x.order < 9)}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          {data.videos.results.length <= 1 ? (
            ""
          ) : (
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10" style={{ padding: "0px" }}>
                <h3>Videos and Trailers</h3>
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
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10" style={{ padding: "0px" }}>
              <h3>Posters </h3>
              <PostersContainer data={data.images.backdrops.splice(0, 12)} />
            </div>
          </div>
          <br />
          <br />
          <br />
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
              <IMDBIcon data={data.imdb_id} />
              <FacebookIcon data={data.external_ids.facebook_id} />
              <InstagramIcon data={data.external_ids.instagram_id} />
              <Twitter data={data.external_ids.twitter_id} />
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
