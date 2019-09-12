import React from "react";

const SearchBox = ({ onSearch, onSearchSubmit }) => {
  return (
    <div className="search-box" style={{ height: "40px" }}>
      <div className="container md-form mb-3 mt-0 ">
        <input
          onKeyDown={onSearchSubmit}
          className="search-box"
          type="text"
          placeholder="Search for a movie, tv show or a person..."
          onChange={onSearch}
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
