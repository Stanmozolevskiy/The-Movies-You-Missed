import React from "react";

const SmallPeopleCardCast = ({ data}) => {
//   if (/movies/.test(props.location.pathname)) {
    return (
      <div>
        {data.map(x => (
          <div
            key={x.id}
            className="text-center col-3"
            style={{
              maxWidth: "20%",
              float: "left"
            }}
          >
            <p style={{ padding: "0px", margin: 0 }}>
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
            </p>
            <h5 className="card-title" style={{ padding: "15px" }}>
              {x.name} -{x.character}
            </h5>
          </div>
        ))}
      </div>
    );
//   } else {
//     return (
//       <div
//         className="card-body text-center"
//         style={{
//           maxWidth: "40%",
//           maxHeight: "40%",
//           margin: "5% 0 5% 22%",
//           padding: "2px"
//         }}
//       >
//         <p style={{ padding: "0px", margin: 0 }}>
//           <img
//             className=" img-fluid"
//             style={{ maxWidth: "40%" }}
//             src={
//               dataTv.profile_path === null
//                 ? window.location.origin + "/people-image-placeholder.jpg"
//                 : `https://image.tmdb.org/t/p/w400${dataTv.profile_path}`
//             }
//             alt=""
//           />
//         </p>
//         <h6 className="card-title" style={{ padding: "15px" }}>
//           Creator: {dataTv.name}
//         </h6>
//       </div>
//     );
//   }
};

export default SmallPeopleCardCast;
