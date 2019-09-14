import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import date from "date-and-time";

const MovieContainer = ({ data }) => {
  //move
  const now = new Date(data.release_date || data.first_air_date);
  const dateOut = date.format(now, "MMMM DD, YYYY ");

  return (
    <div
      className=" container-size card mb-3 col-5 m-3 mx-auto"
      style={{ padding: 0 }}
    >
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="card-img image-fit"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body" style={{ padding: "10px" }}>
            <div className="container">
              <div className="row">
                <div className="col-4" style={{ marginBottom: "5px" }}>
                  {/* need to move */}
                  <AnimatedProgressProvider
                    className="rating"
                    valueStart={0}
                    valueEnd={data.vote_average * 10}
                    duration={0.9}
                    easingFunction={easeQuadInOut}
                  >
                    {value => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            trailColor: "white",
                            pathColor: "gold"
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
                <div
                  className="col-8"
                  style={{
                    padding: 0,
                    verticalAlign: "top"
                  }}
                >
                  <strong style={{ marginBottom: 0 }}>
                    {data.title || data.name}
                  </strong>
                  <p style={{ marginBottom: "10px", marginTop: "15px" }}>
                    {dateOut}
                  </p>
                </div>
              </div>
            </div>

            <p className="card-text d-inline-block  multiline-ellipsis">
              {data.overview}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <button className="btn">more information</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
