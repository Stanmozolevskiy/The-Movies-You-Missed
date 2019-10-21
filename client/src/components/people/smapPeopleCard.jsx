import React from "react";

const SmallPeopleCard = ({ data, dataTv, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "50%",
          maxHeight: "40%",
          margin: "5% 0 5% 22%",
          padding: "2px"
        }}
      >
        <h5>
          <strong
            style={{
              background: "#FFF9F7",
              padding: "8px",
              textAlign: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px"
            }}
          >
            Director
          </strong>
        </h5>
        <br />
        <p style={{ padding: "0px", margin: 0 }}>
          <img
            className=" img-fluid"
            style={{ maxWidth: "50%" }}
            src={
              data.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${data.profile_path}`
            }
            alt=""
          />
        </p>
        <h6 className="card-title" style={{ padding: "15px" }}>
          {data.name}
        </h6>
      </div>
    );
  } else {
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "40%",
          maxHeight: "40%",
          margin: "5% 0 5% 22%",
          padding: "2px"
        }}
      >
        <p style={{ padding: "0px", margin: 0 }}>
          <img
            className=" img-fluid"
            style={{ maxWidth: "40%" }}
            src={
              dataTv.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${dataTv.profile_path}`
            }
            alt=""
          />
        </p>
        <h6 className="card-title" style={{ padding: "15px" }}>
          Creator: {dataTv.name}
        </h6>
      </div>
    );
  }
};

export default SmallPeopleCard;
