import React from "react";

const SmallPeopleCard = ({ data, dataTv, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "50%",
          maxHeight: "40%",
          margin: "5% 0 5% 25%",
          padding: "2px"
        }}
      >
        <h5>
          <strong
            style={{
              background: "#FFF9F7",
              padding: "8px",
              textAlign: "center",
              position: "absolute",
              top: " -10px",
              left: " 40%",
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
            style={{ maxWidth: "50%" }}
            src={data === undefined ? '' :
              data.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${data.profile_path}`
            }
            alt=""
          />
        </p>
        <h6 className="card-title" style={{ padding: "15px" }}>
          {data === undefined ? '' : data.name}
        </h6>
      </div>
    );
  } else {
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "50%",
          maxHeight: "40%",
          margin: "5% 0 5% 25%",
          padding: "2px"
        }}
      >
        <h5>
          <strong
            style={{
              background: "#FFF9F7",
              padding: "8px",
              textAlign: "center",
              position: "absolute",
              top: " -10px",
              left: " 40%",
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
            style={{ maxWidth: "50%" }}
            src={dataTv === undefined ? '' :
              dataTv.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${dataTv.profile_path}`
            }
            alt=""
          />
        </p>
      </div>
    );
  }
};

export default SmallPeopleCard;
