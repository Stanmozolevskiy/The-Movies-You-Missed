import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { regester } from '../../services/userService'

class SingIn
    extends Component {
    state = {

        name: '',
        email: '',
        password: ''

    }
    onSubmit = async () => {
        const jwt = await regester(this.state)
        localStorage.setItem('token', jwt)
        this.props.history.push('/')
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div className="row">
                <div className="col-2"></div>

                <div className='col-6'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard>
                                    <MDBCardBody className="mx-4">
                                        <div className="text-center">
                                            <h3 className="dark-grey-text mb-5">
                                                <strong>Sign Up</strong>
                                            </h3>
                                        </div>
                                        <MDBInput
                                            label="Your name"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.handleNameChange}
                                        />
                                        <MDBInput
                                            label="Your email"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.handleEmailChange}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            group
                                            type="password"
                                            validate
                                            containerClass="mb-0"
                                            onChange={this.handlePasswordChange}
                                        />
                                        <div className="text-center mb-3">
                                            <MDBBtn
                                                type="button"
                                                gradient="blue"
                                                rounded
                                                className="btn-block z-depth-1a"
                                                onClick={this.onSubmit}
                                            >
                                                Sign in
                    </MDBBtn>
                                        </div>
                                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                            or Sign in with:
                  </p>
                                        <div className="row my-3 d-flex justify-content-center">
                                            <MDBBtn
                                                type="button"
                                                color="white"
                                                rounded
                                                className="mr-md-3 z-depth-1a"
                                            >
                                                <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                            </MDBBtn>
                                            <MDBBtn
                                                type="button"
                                                color="white"
                                                rounded
                                                className="mr-md-3 z-depth-1a"
                                            >
                                                <MDBIcon fab icon="twitter" className="blue-text" />
                                            </MDBBtn>
                                            <MDBBtn
                                                type="button"
                                                color="white"
                                                rounded
                                                className="z-depth-1a"
                                            >
                                                <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                            </MDBBtn>
                                        </div>
                                    </MDBCardBody>

                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br />
                    <br />
                    <br />

                </div>
                <div className="col-4"></div>

            </div>
        );
    }
}

export default SingIn;


