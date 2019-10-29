import React, { Component } from 'react';
import { getPersonDetails } from '../../../services/peopleServise'

class PeopleDetails extends Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const data = await getPersonDetails(this.props.match.params.id)
        this.setState(data)
    }

    render() {
        console.log(this.state.data)
        return (


            <div className="container" style={{ border: '1px solid black' }}>
                <div className="row">
                    <div className="col-0"></div>
                    <div className="col-6" style={{ lineHeight: '1.6', marginTop: '50px' }}>
                        <h1>Hi, I'm {this.state.data.name}</h1>
                        <p> {this.state.data.biography} </p>
                    </div>
                    <div className="col-6">
                        <img
                            src={`https://image.tmdb.org/t/p/original${this.state.data.profile_path}`}
                            style={{
                                // width: '100%',
                                maxHeight: '740px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                                // objectFit: 'cover'
                            }}
                            alt="" />
                    </div>
                    <div className="col-0"></div>
                </div>
            </div>


        );
    }
}

export default PeopleDetails;