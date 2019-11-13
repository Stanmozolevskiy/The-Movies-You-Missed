import React from 'react';


const UpComingContainer = ({ data, title }) => {
    return (
        <div
            className="col-sm-5 col-12 up-coming home-box"
            style={{
                padding: "0px "
            }}
        >
            <h4
                style={{
                    textAlign: 'center'
                }}
            >{title}</h4>
            <div className="row"
                style={{
                    height: '380px',
                }}
            >
                <div className="col-6"
                    style={{
                        paddingLeft: '15px',
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
                            height: '190px'
                        }}
                    >
                        <div className="col-5"
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
                        <div className="col-5"
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
                            height: '190px'
                        }}
                    >
                        <div className="col-5"
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
                        <div className="col-5"
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