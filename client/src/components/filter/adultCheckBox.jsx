import React from "react";

const AdultCheckBox = ({ onChange }) => {
  return (
    <div className="form-check">
      <input
        style={{ marginRight: "5px" }}
        className="form-check-input position-static"
        type="checkbox"
        id="adult"
        value="true"
        onChange={onChange}
      />

      <label
        className="form-check-label"
        htmlFor="adult"
        style={{ color: "gray" }}
      >
        Adults
      </label>
    </div>
  );
};

export default AdultCheckBox;
