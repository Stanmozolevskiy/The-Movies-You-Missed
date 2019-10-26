import React from "react";

const Collection = ({ data }) => {
  if (data !== null) {
    return (
      <div>
        <div
          className="movie-background collection"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
          }}
        >
          <div style={{ height: "400px" }}>
            <div className="container">
              <div className="row">
                <div className="col-3" ></div>
                <div className="col-6" style={{ color: "white" }}>
                  <h1 >{data.name}</h1>
                  <div className="card" style={{ width: "10rem" }}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                      alt=""
                      className="card-img"
                    />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <h5
                        className="card-text"
                        style={{
                          color: "black",
                          textAlign: "center",
                          padding: "4px"
                        }}
                      >
                        {data.name.length >= 19
                          ? data.name.slice(0, 19)
                          : data.name}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Collection;
