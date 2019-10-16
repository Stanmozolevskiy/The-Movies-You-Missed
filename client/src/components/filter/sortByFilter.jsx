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
const options = [
  { value: "popularity.desc", label: "Popular+" },
  { value: "popularity.asc", label: "Popular-" },
  { value: "vote_average.asc", label: "Rating-" },
  { value: "vote_average.desc", label: "Rating+" },
  { value: "primary_release_date.asc", label: "Date-" },
  { value: "primary_release_date.desc", label: "Date+" },
  { value: "revenue.asc", label: "Budjet-" },
  { value: "revenue.desc", label: "Budjet+" },
  { value: "original_title.asc", label: "Title-" },
  { value: "original_title.desc", label: "Title+" }
];

const SortByFilter = ({ onChange }) => {
  return (
    <Select
      styles={customStyles}
      options={options}
      isMulti={false}
      isSearchable={true}
      onChange={onChange}
      // isClearable={true}
      placeholder={"Sort By"}
      container="filter-dropbox"
    />
  );
};

export default SortByFilter;
