import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";

const GroupList = ({ movieCount, tvCount, peopleCount, onGroupChange }) => {
    return (
        <div className='group-list'>
            <MDBContainer >
                <hr />
                <MDBListGroup >
                    <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center"
                        type='movies'
                        onClick={onGroupChange}>
                        Movies<MDBBadge color="primary" pill>{movieCount}</MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center"
                        type='tv'
                        onClick={onGroupChange}>TV Show<MDBBadge
                            color="primary" pill>{tvCount}</MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center"
                        type='people'
                        onClick={''}>People<MDBBadge color="primary"
                            pill>{peopleCount}</MDBBadge>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBContainer>
        </div>
    );
};

export default GroupList;