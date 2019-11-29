import React from "react";
import Select from "react-select";

// style
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "blue" : "gray",
    background: state.isFocused ? "white" : "white",
    padding: 5,
    textAlign: "left"
  }),
  control: () => ({
    width: 90,
    color: "black"
  }),
  container: provided => ({
    ...provided,
    textAlign: "center",
    borderBottom: "1px solid gray"
    // background: "black",
  }),
  dropdownIndicator: provided => ({
    ...provided,
    display: "none"
  }),
  input: provided => ({
    ...provided,
    color: "gray"
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};
//   convert options to the right format
const rename = (capitals, value) => {
  capitals = capitals.map(function(obj) {
    obj["value"] = obj["id"];
    obj["label"] = obj["name"];
    // delete obj["id"];
  });
};

const GenreFilter = ({ data, onChange }) => {
  if (data.length === 0) {
    return "";
  } else {
    //   convert options to the right format
    rename(data.map(x => x));

    return (
      <Select
        styles={customStyles}
        options={data}
        key={data.id}
        isMulti={false}
        isSearchable={true}
        onChange={onChange}
        // isClearable={true}
        placeholder={"Genre"}
        container="filter-dropbox"
      />
    );
  }
};

export default GenreFilter;
