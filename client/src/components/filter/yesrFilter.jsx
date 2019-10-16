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
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
  { value: 2017, label: 2017 },
  { value: 2016, label: 2016 },
  { value: 2015, label: 2015 },
  { value: 2014, label: 2014 },
  { value: 2013, label: 2013 }
];

const YearFilter = ({ onChange }) => {
  return (
    <Select
      styles={customStyles}
      options={options}
      isMulti={false}
      isSearchable={true}
      onChange={onChange}
      // isClearable={true}
      placeholder={"Year"}
      container="filter-dropbox"
    />
  );
};

export default YearFilter;
