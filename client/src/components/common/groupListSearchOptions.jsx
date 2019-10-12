import React from "react";

const GroupListSearchOptions = ({ data, onGenreChange, selected }) => {
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
          key={x}
          onClick={onGenreChange}
          value={x}
          name={x}
          className={selected === x ? "list-group-item- active" : "list-group-item"}
          style={{
            padding: 0,
            border: 0,
            cursor: "pointer",
            textAlign: 'left',
            outline: 'none'
          }}
        >
          {x}
        </button>
      ))}
    </ul>
  );
};

export default GroupListSearchOptions;
