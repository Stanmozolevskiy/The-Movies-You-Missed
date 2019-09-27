import React from 'react';

const ProductionCompanieIcons = ({ data }) => {
    console.log(data)
    return (
        <div style={{ display: 'flex', textAlign: 'center', marginTop: '10px' }}> {data.map(x =>
            <div
                className="card-body text-center"
                key={x.id}
                style={{
                    maxWidth: "100%",
                    display: 'block',
                    // padding: "0px",
                    // marginLeft: '5px',
                    // marginRight: '5px',
                }}
            >

                <img
                    style={{
                        maxWidth: "50px",
                        display: 'inline-block',
                        margin: 'auto',
                        padding: '2px'

                    }}
                    src={
                        x.logo_path === null
                            ? window.location.origin + "/no-logo.jpg"
                            : `https://image.tmdb.org/t/p/original${x.logo_path}`
                    }
                    alt={x.name}
                />
                <p>{x.name}</p>

            </div>

        )}

        </div>
    );
}

export default ProductionCompanieIcons;