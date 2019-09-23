import React from "react";

const GroupList = ({ data, onGenreChange }) => {
  return (
    <ul
      className="list-group"
      style={{
        paddingLeft: "100px",
        paddingTop: "90px"
      }}
    >
      {data.map(x => (
        <button
          key={x.id}
          onClick={onGenreChange}
          value={x.id}
          name={x.name}
          className="list-group-item"
          style={{
            padding: 0,
            border: 0,
            cursor: "pointer",
            textAlign: 'left',
            outline: 'none'
          }}
        >
          {x.name}
        </button>
      ))}
    </ul>
  );
};

export default GroupList;
