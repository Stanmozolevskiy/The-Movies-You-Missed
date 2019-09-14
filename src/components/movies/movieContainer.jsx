import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "../common/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
// import 'react-circular-progressbar/dist/styles.css';

const MovieContainer = ({ data }) => {
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
                <table className="col-12 table">
                  <thead>
                    <tr>
                      <th style={{ border: "none", padding: "0px" }}>
                        <AnimatedProgressProvider
                          className="rating"
                          valueStart={0}
                          valueEnd={data.vote_average * 10}
                          duration={1.4}
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
                      </th>
                      <th
                        style={{
                          border: "none",
                          padding: "0px",
                          verticalAlign: "top"
                        }}
                      >
                        {data.title || data.name}
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <p className="card-text d-inline-block  multiline-ellipsis">
              {data.overview}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
