import React from "react";

const PeopleCard = data => {
  return (
    <div
      className="card col-3"
      style={{
        margin: "10px 0 10px 0",
        border: "none"
        // boxShadow: " 5px 5px #ececec"
      }}
    >
      <img
        className="image-fit"
        src={`https://image.tmdb.org/t/p/w400${data.data.profile_path}`}
        alt="Card "
        style={{ maxHeight: "250px" }}
      />
      <div className="card-body" style={{ padding: "0px" }}>
        <h5 style={{ textAlign: "center" }}>{data.data.name}</h5>
        <p style={{ margin: "0", textAlign: "center" }}>
          {data.data.gender === 1 ? "Female" : "Male"} {}
          {data.data.known_for_department === "Directing"
            ? data.data.known_for_department.replace("ing", "or")
            : data.data.known_for_department.replace("ing", "er")}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
