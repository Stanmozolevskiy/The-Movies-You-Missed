import React from 'react';


const UpComingContainer = ({ data, title }) => {
    return (
        <div
            className="col-sm-2 col-8 up-coming home-box"
            style={{
                marginLeft: '5%',
                padding: "0px",
            }}
        >
            <h4
                style={{
                    textAlign: 'center'
                }}
            > <strong>{title}</strong></h4>
            <div className="row"
                style={{
                    height: '260px',
                    boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
                }}
            >
                <div className="col-6"
                    style={{
                        paddingLeft: '0px',
                        paddingRight: '15px',
                    }}
                >
                    <img
                        className="image-fit-homepage-left"
                        src={`https://image.tmdb.org/t/p/original/${data[0].poster_path}`}
                        alt=""
                    />
                </div>
                <div className="col-6"
                    style={{
                        paddingLeft: '1px',
                        paddingRight: '1px',

                    }}
                >
                    <div className="row"
                        style={{
                            height: '130px'
                        }}
                    >
                        <div className="col-6"
                            style={{
                                paddingLeft: '1px',
                                paddingRight: '1px',

                            }}
                        >
                            <img
                                className="image-fit-homepage-right"
                                src={`https://image.tmdb.org/t/p/original/${data[1].poster_path}`}
                                alt=""
                            />
                        </div>
                        <div className="col-6"
                            style={{
                                paddingLeft: '1px',
                                paddingRight: '1px',

                            }}
                        >
                            <img
                                className="image-fit-homepage-right"
                                src={`https://image.tmdb.org/t/p/original/${data[2].poster_path}`}
                                alt=""
                            />
                        </div>


                    </div>
                    <div className="row"
                        style={{
                            height: '130px'
                        }}
                    >
                        <div className="col-6"
                            style={{
                                paddingLeft: '1px',
                                paddingRight: '1px',

                            }}
                        >
                            <img
                                className="image-fit-homepage-right"
                                src={`https://image.tmdb.org/t/p/original/${data[3].poster_path}`}
                                alt=""
                            />
                        </div>
                        <div className="col-6"
                            style={{
                                paddingLeft: '1px',
                                paddingRight: '1px',

                            }}
                        >
                            <img
                                className="image-fit-homepage-right"
                                src={`https://image.tmdb.org/t/p/original/${data[4].poster_path}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default UpComingContainer;