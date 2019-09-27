import React from "react";

const SmallPeopleCard = ({ data, dataTv, props }) => {
  if (/movies/.test(props.location.pathname)) {
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "40%",
          maxHeight: "40%",
          margin: "5% 0 5% 15%",
          background: "#F9EEEE",
          padding: "2px"
        }}
      >
        <p style={{ padding: "0px", margin: 0 }}>
          <img
            className=" img-fluid"
            style={{ maxWidth: "70%" }}
            src={
              data.profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${data.profile_path}`
            }
            alt=""
          />
        </p>
        <h6 className="card-title" style={{ padding: "15px" }}>
          {data.name} -{data.job}
        </h6>
      </div>
    );
  } else {
    //   console.log(dataTv.created_by)
    return (
      <div
        className="card-body text-center"
        style={{
          maxWidth: "40%",
          maxHeight: "40%",
          margin: "5% 0 5% 15%",
          background: "#F9EEEE",
          padding: "2px"
        }}
      >
        {/* <p style={{ padding: "0px", margin: 0 }}>
          <img
            className=" img-fluid"
            style={{ maxWidth: "70%" }}
            src={
              profile_path === null
                ? window.location.origin + "/people-image-placeholder.jpg"
                : `https://image.tmdb.org/t/p/w400${profile_path}`
            }
            alt=""
          />
        </p>
        <h6 className="card-title" style={{ padding: "15px" }}>
          {name}
        </h6> */}
      </div>
    );
  }
};

export default SmallPeopleCard;
