import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
import { regester, regesterWithAccount } from "../../services/userService";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

class Register extends Component {
  state = {
    user: {
      confirmed: false,
      name: "",
      email: "",
      password: ""
    },
    errors: ""
  };

  onSubmit = async () => {
    try {
      await regester(this.state.user);
      this.props.history.push("/confirmemail");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: ex.response.data });
      }
    }
  };
  onSubmitWithAccount = async () => {
    const jwt = await regesterWithAccount(this.state);
    console.log(jwt);
    localStorage.setItem("token", jwt.data);
    window.location.href = `${window.location.origin}/movies`;
  };

  changeHandler = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };
  // validation
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  responseGoogle = response => {
    this.setState({
      user: {
        name: response.profileObj.givenName,
        email: response.profileObj.email,
        password: response.profileObj.googleId,
        confirmed: true
      }
    });
    this.onSubmitWithAccount();
  };
  responseFacebook = response => {
    this.setState({
      user: {
        confirmed: true,
        name: response.name,
        email: response.email,
        password: response.id
      }
    });
    this.onSubmitWithAccount();
  };

  render() {
    return (
      <div className="row">
        <div className="col-4"></div>

        <div className="col-7">
          <br />
          <br />
          <MDBContainer>
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
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
                                textButton="Sing Up"
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
                                callback={this.responseFacebook}
                              />
                            </div>
                            <div
                              className="col-6"
                              style={{ textAlign: "center" }}
                            >
                              <GoogleLogin
                                clientId="886849711953-s25j19otdh8evmge0jhbv8gqq3imrj5p.apps.googleusercontent.com"
                                buttonText="Sing Up"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={"single_host_origin"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div style={{ textAlign: "center", color: "red" }}>
                        {this.state.errors}
                      </div>
                      <MDBInput
                        label="Your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        name="name"
                        className="form-control"
                        required
                        success="right"
                        onChange={this.changeHandler}
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <MDBInput
                        label="Your email"
                        group
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        error="wrong"
                        success="right"
                        onChange={this.changeHandler}
                      />
                      <MDBInput
                        label="Your password"
                        group
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        containerClass="mb-0"
                        onChange={this.changeHandler}
                      />

                      <div className="text-center mb-3">
                        <MDBBtn
                          color="primary"
                          type="submit"
                          onClick={this.onSubmit}
                        >
                          Sign Up
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </form>
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
