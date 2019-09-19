import React from 'react';

const TrailerButton = ({ handleTrailer }) => {
    return (
        <div className='vatch-trailer-btn-cover' onClick={handleTrailer}>
            watch trailer
      </div>
    );
}

export default TrailerButton;