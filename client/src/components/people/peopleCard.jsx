import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ data }) => {
  return (
    <div className="card col-5 col-sm-3 people-card">
      <Link to={`/people/${data.id}`} >
        <img
          className="image-fit"
          src={`https://image.tmdb.org/t/p/w400${data.profile_path}`}
          alt="Card "
        />

        <div className="card-body" style={{ padding: "0px", color: 'black' }}>
          <h5 style={{ textAlign: "center" }}>{data.name}</h5>
          <p style={{ margin: "0", textAlign: "center" }}>
            {data.gender === 1 ? "Female" : "Male"} {}
            {data.known_for_department === "Directing"
              ? data.known_for_department.replace("ing", "or")
              : data.known_for_department.replace("ing", "er")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PeopleCard;
