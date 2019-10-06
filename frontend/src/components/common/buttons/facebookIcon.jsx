import React from "react";


const FacebookIcon = ({ data }) => {
    function changePage() {
        window.location = `https://www.facebook.com/${data}/`;
    }

    return (
        <i
            className="fa fa-facebook-official fa-2x"
            aria-hidden="true"
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={changePage} />

    );
};

export default FacebookIcon;
