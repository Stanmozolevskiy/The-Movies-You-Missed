// import React from "react";
// import { Link } from "react-router-dom";
// import RatingCircle from '../common/ratingCircle'
// import formatDate from '../../utilities/dataFormat'

// const TvContainer = ({ data }) => {

//   return (
//     <div
//       className=" container-size card mb-3 col-5 m-3 mx-auto"
//       style={{ padding: 0 }}
//     >
//       <div className="row no-gutters">
//         <div className="col-md-5">

//           <Link to={`/tv/${data.id}`}>
//             <img
//               src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
//               className="card-img image-fit"
//               alt="..."
//             />
//           </Link>
//         </div>
//         <div className="col-md-7">
//           <div className="card-body" style={{ padding: "10px" }}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-4" style={{ marginBottom: "5px" }}>
//                   <RatingCircle rating={data.vote_average} className='rating-movie-card' />
//                 </div>
//                 <div
//                   className="col-8"
//                   style={{
//                     padding: 0,
//                     verticalAlign: "top"
//                   }}
//                 >
//                   <strong style={{ marginBottom: 0 }}>
//                     {data.title || data.name}
//                   </strong>
//                   <p style={{ marginBottom: "10px", marginTop: "15px" }}>
//                     {formatDate(data.release_date || data.first_air_date)}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <p className="card-text d-inline-block  multiline-ellipsis">
//               {data.overview}
//             </p>
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <Link to={`/tv/${data.id}`}>more information</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TvContainer;
