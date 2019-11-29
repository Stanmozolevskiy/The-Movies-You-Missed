import React from "react";

const Twitter = ({ data }) => {
    function changePage() {
        window.location = `https://twitter.com/hashtag/${data}?src=hash&ref_src=twsrc%5Etfw&lang=fr`;
    }

    return (
        <i
            className="fa fa-twitter-square fa-2x"
            aria-hidden="true"
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={changePage} />
    );
};

export default Twitter;
