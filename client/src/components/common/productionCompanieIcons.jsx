import React from "react";

const ProductionCompanieIcons = ({ data }) => {
  return (
    <div style={{ display: "flex", textAlign: "center", marginTop: "10px" }}>
      {data.map(x => (
        <img
          key={x.id}
          style={{
            maxWidth: "40px",
            // height: "auto",
            margin: "auto",
            padding: "2px"
          }}
          src={
            x.logo_path === null
              ? window.location.origin + "/no-logo.jpg"
              : `https://image.tmdb.org/t/p/original${x.logo_path}`
          }
          alt={x.name}
        />
      ))}
    </div>
  );
};

export default ProductionCompanieIcons;
