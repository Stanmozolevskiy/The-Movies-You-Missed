import React from "react";


const MovieContainer = ({ data }) => {
    // console.log(data)
    return (
        <div className="card mb-3 col-5 m-3 mx-auto" style={{ "padding": 0, "flex-direction": 'initial', "box-shadow": "2px 2px 5px #ECECEC", "border": 'none', 'max-height': "290px"}}>
            <div className="row no-gutters">
                <div className="col-md-5">
                    <img
                        src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
                        className="card-img"
                        alt="..."
                        style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text d-inline-block  multiline-ellipsis">
                            {data.overview}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                Last updated 3 mins ago
                          </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieContainer;