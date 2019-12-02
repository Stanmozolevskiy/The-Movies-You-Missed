import React from "react";

const NotFound = () => {
  console.log(`url(${window.location.origin}/not-found-page.jpg)`);
  return (
    <div
      className="popcorn-image"
      style={{
        backgroundImage: `url(${window.location.origin}/not-found-page.jpg)`,
      }}
    >
      <div className="container" style={{ height: "750px" }}>
        <h1 style={{ fontSize: "70px", paddingTop: '200px', fontWeight: '400' }}>Oops.</h1>
        <h6>The page you were looking for doesn't exist.</h6>
        <button className="btn btn-md">Go to the Home</button>
      </div>
    </div >
  );
};

export default NotFound;
