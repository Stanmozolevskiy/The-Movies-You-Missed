import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
import { regester } from "../../services/userService";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import style from "mdbreact/dist/css/mdb.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  onSubmit = async () => {
    const jwt = await regester(this.state);
    localStorage.setItem("token", jwt);
    this.props.history.push("/");
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  responseGoogle = response => {
    console.log(response);
  };
  responseFacebook = response => {
    console.log(response);
  };

  render() {
    return (
      <div className="row">
        <div className="col-4"></div>

        <div className="col-7">
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
                      <p>
                        Already have an account?
                        <a href="/signin"> Please sign in now.</a>
                      </p>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                      or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-6"
                            style={{ textAlign: "center" }}
                          >
                            <FacebookLogin
                              appId="2402789373313793"
                              autoLoad={false}
                              fields="name,email,picture"
                              textButton="Login"
                              cssClass="my-facebook-button-class"
                              icon={
                                <i
                                  className="fa fa-facebook-official fa-2x"
                                  aria-hidden="true"
                                  style={{
                                    marginRight: "15px",
                                    padding: "0px"
                                  }}
                                />
                              }
                              // onClick={componentClicked}
                              callback={this.responseFacebook}
                            />
                          </div>
                          <div
                            className="col-6"
                            style={{ textAlign: "center" }}
                          >
                            <GoogleLogin
                              clientId="886849711953-oo34cvtbgrbqshtaod17257cuila6i4i.apps.googleusercontent.com"
                              buttonText="Login"
                              onSuccess={this.responseGoogle}
                              onFailure={this.responseGoogle}
                              cookiePolicy={"single_host_origin"}
                            />
                          </div>
                        </div>
                      </div>
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
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <br />
          <br />
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default Register;
