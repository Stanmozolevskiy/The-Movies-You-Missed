import React from "react";

const PeopleCard = ({ data }) => {
  return (
    <div className="card col-5 col-sm-3 people-card">
      <img
        className="image-fit"
        src={`https://image.tmdb.org/t/p/w400${data.profile_path}`}
        alt="Card "
        // style={{ maxHeight: "250px" }}
      />
      <div className="card-body" style={{ padding: "0px" }}>
        <h5 style={{ textAlign: "center" }}>{data.name}</h5>
        <p style={{ margin: "0", textAlign: "center" }}>
          {data.gender === 1 ? "Female" : "Male"} {}
          {data.known_for_department === "Directing"
            ? data.known_for_department.replace("ing", "or")
            : data.known_for_department.replace("ing", "er")}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
