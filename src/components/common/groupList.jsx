import React from 'react';


const GroupList = ({ data, onGenreChange }) => {
    return (

        <ul className="list-group"
            style={{
                paddingLeft: '100px',
                paddingTop: '90px'

            }}
        >
            {data.map(x =>
                <li key={x.id}
                    onClick={onGenreChange}
                    value={x.name}
                    className="list-group-item"
                    style={{
                        padding: 0,
                        border: 0,
                        cursor: 'pointer'
                    }}>
                    {x.name}
                </li>)}

        </ul>
    );
}

export default GroupList;