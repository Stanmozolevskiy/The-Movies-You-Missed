import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'



const DropDown = ({ handleChange, data, placeholder }) => {
    return (<section style={{
        marginLeft: '40px',
        paddingLeft: "10px",
        paddingTop: "90px",

    }}>
        <Dropdown options={data} onChange={handleChange} placeholder={placeholder} />

    </section>);
}

export default DropDown;