import React from 'react';
import YouTube from "react-youtube";


const TrailerContainer = ({ data }) => {
    console.log(data)
    return (
        <div
            className="text-center "
            style={{
                backgroundColor: "#333",
                overflow: 'auto',
                whiteSpace: 'nowrap',
            }}>
            {data.map(x =>
                <div
                    key={x.id}
                    className="text-center "
                    style={{
                        display: 'inline-block',
                        color: 'white',
                        margin: '40px',
                    }}
                >
                    <YouTube
                        key={x.id}
                        videoId={x.key}
                        style={{
                            height: '150px',
                            width: '200px',
                            playerVars: {
                                autoplay: 0
                            },
                        }}
                    />

                </div>

            )}

        </div>
    );
}

export default TrailerContainer;