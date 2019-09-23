import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2000
]


const DropDown = ({ onYearChange, data }) => {
    return (<section style={{
        paddingLeft: "10px",
        paddingTop: "90px"
    }}>
        <Dropdown options={options} onChange={onYearChange} value={data} placeholder="Yesr" />

    </section>);
}

export default DropDown;