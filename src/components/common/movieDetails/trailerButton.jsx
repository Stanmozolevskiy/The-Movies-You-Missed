import React from 'react';

const TrailerButton = ({ handleTrailer }) => {
    return (
        <div className='vatch-trailer-btn-cover' onClick={handleTrailer}>
            <i
                className="fa fa-play fa-1x"
                aria-hidden="true"
                style={{ margin: "10px", cursor: "pointer" }}
            />   watch trailer
      </div>
    );
}

export default TrailerButton;