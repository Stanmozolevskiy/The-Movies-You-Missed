import React from "react";

const SmallPeopleCardCast = ({ data }) => {
  return (
    <div style={{
      // backgroundColor: "#333",
      overflow: 'auto',
      whiteSpace: 'nowrap',
    }}>
      {
        data.map(x => (
          <div
            key={x.id}
            className="text-center "
            style={{
              maxWidth: "20%",
              display: 'inline-block',
              color: 'black',
              marginBottom: '15px',
            }}
          >

            <img
              className=" img-fluid"
              style={{ maxWidth: "50%" }}
              src={
                x.profile_path === null
                  ? window.location.origin + "/people-image-placeholder.jpg"
                  : `https://image.tmdb.org/t/p/w400${x.profile_path}`
              }
              alt=""
            />

            <h5 style={{ padding: "0px", margin: '0px' }}>
              {x.name}
            </h5>
            <h6 style={{ whiteSpace: 'normal' }}>
              {x.character.length >= 30 ? x.character.slice(0, 30) + '...' : x.character}
            </h6>
          </div>
        ))
      }
    </div >
  );

};

export default SmallPeopleCardCast;
