import React, { Component } from "react";
import { Relocate } from "react-router-dom";

const ModalForTrending = ({ props, data }) => {

    const onClick = () => {
        /movies/.test(props.match.path) ?
            window.location = `/movies/${data.id}`
            : window.location = `/tv/${data.id}`
    }
    // console.log(props)
    return (
        <div
            className="text-center hover-red"
            style={{
                display: "inline-block",
                margin: "10px",
                color: "white",
                minWidth: "40px !important"
            }}
        >
            <div >

                <img
                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                    alt=""
                    style={{
                        width: "120px",
                        maxHeight: "300px",
                        cursor: "pointer"
                    }}
                    className="poster-container"
                    onClick={onClick}
                />

            </div>
        </div>
    );
}

export default ModalForTrending;