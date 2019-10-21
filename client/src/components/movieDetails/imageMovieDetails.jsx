import React from 'react';

const Image = ({ imageId }) => {
    return (
        <img
            src={`https://image.tmdb.org/t/p/original/${imageId}`}
            className="movie-description-container"
            alt="..."
        />
    );
}

export default Image;