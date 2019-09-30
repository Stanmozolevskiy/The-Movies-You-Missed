import React from "react";

const InstagramIcon = ({ data }) => {
    function changePage() {
        window.location = `https://www.instagram.com/${data}/?hl=en`;
    }

    return (
        <i
            className="fa fa-instagram fa-2x"
            aria-hidden="true"
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={changePage} />
    );
};

export default InstagramIcon;
