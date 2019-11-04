import React, { Component } from "react";
import formatDate from "../../../utilities/dataFormat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Rating from "react-rating";
import { Collapse } from "react-collapse";
import DropDown from '../dropDown'
// import SmallPeopleCard from "../smapPeopleCard";
// import ProductionCompanieIcons from "../common/productionCompanieIcons";
// import MovieGeneralDetails from "../movieDetails/movieGeneralDetails";
// import HomePage from "../common/buttons/homePage";
// import IMDBIcon from "../common/buttons/imdb";
// import InstagramIcon from "../common/buttons/instagram";
// import FacebookIcon from "../common/buttons/facebookIcon";
// import Twitter from "../common/buttons/twittwe";
// import TrailerContainer from "./trailer/trailersContainer";
// import Collection from "../movies/collection";
// import PostersContainer from "./poster/postersContainer";
// import CommentsBody from "../comments/commentsBody";
// import CastContainer from "./cast/castContainer";
// import TrendingContainer from "./trending/trendingContainer";

const PeopleDetailsBody = ({ movieCredit, tvCredit, data, peoplePictures, props }) => {

  // console.log();
  return (
    <div
      className="row"
      style={{
        marginLeft: "0px",
        marginRight: "0px"
      }}
    >
      {/*  LEFT SIDE */}
      <div className="col-12 col-sm-9">
        <div className="row movie-body-unit">
          <div className="col-0 col-sm-2"></div>
          <div className="col-0 col-sm-10">
            <Tabs>
              <TabList>
                <Tab>Movies</Tab>
                <Tab>Tv Show</Tab>
                <Tab>Pictures</Tab>
              </TabList>
              <TabPanel>
                <DropDown props={props} role={'Character'} dataRole={'x.character'} data={movieCredit.cast} title={'Acting:'} />
                <hr />
                <DropDown props={props} role={'Job'} dataRole={'x.job'} data={movieCredit.crew} title={'Crew:'} />

              </TabPanel>
              <TabPanel>
                <DropDown props={props} role={'Character'} dataRole={'x.character'} data={tvCredit.cast} title={'Acting:'} />
                <hr />
                <DropDown props={props} role={'Job'} dataRole={'x.job'} data={tvCredit.crew} title={'Crew:'} />

              </TabPanel>
              <TabPanel>
                {peoplePictures.profiles.map(x => (
                  <img
                    key={x.file_path}
                    style={{
                      maxHeight: "150px",
                      margin: "5px"
                    }}
                    src={`https://image.tmdb.org/t/p/original/${x.file_path}`}
                    alt=""
                  />
                ))}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      {/*  LEFT SIDE END*/}

      {/* RIGHT SIDE */}
      <div className="col-12 col-sm-3 movie-body-right">
        <div className="row ">
          <div className="col-12">
            <h5>
              <strong
                style={{
                  background: "#FFF9F7",
                  padding: "8px",
                  textAlign: "center",
                  position: "absolute",
                  top: " -10px",
                  left: " 35%",
                  boxShadow:
                    "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px"
                }}
              >
                Known Facts
            </strong>
            </h5>
            <div style={{ marginTop: "15%", textAlign: "center" }}>
              <h6>Date of birth:</h6>
              <h5> {formatDate(data.birthday, "DD MMMM YYYY")}</h5>
              <h6>Date of death:</h6>
              <h5> {formatDate(data.deathday, "DD MMMM YYYY")}</h5>
              <h6>Gender:</h6>
              <h5> {data.gender === 1 ? "Female" : "Male"}</h5>
              <h6>Known For:</h6>
              <h5>
                {data.known_for_department === "Directing"
                  ? data.known_for_department.replace("ing", "or")
                  : data.known_for_department.replace("ing", "er")}
              </h5>
              <hr />
              <h6>
                {" "}
                <strong> Also known as: </strong>
              </h6>

              {data.also_known_as.map(x => (
                <h6 key={x}> {x} </h6>
              ))}
              {data.also_known_as.length === 0 ? (
                <p> No Information avalable </p>
              ) : (
                  ""
                )}
            </div>

            {/* <HomePage data={data.homepage} />
              <IMDBIcon data={data.imdb_id} />
              <FacebookIcon data={data.external_ids.facebook_id} />
              <InstagramIcon data={data.external_ids.instagram_id} />
              <Twitter data={data.external_ids.twitter_id} /> */}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE END*/}
    </div>

  );
}

export default PeopleDetailsBody;


