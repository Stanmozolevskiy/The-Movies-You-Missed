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
import { singnIn, singnInWithAccount } from "../../services/userService";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

class SingIn extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    errors: ""
  };

  onSubmit = async () => {
    try {
      const jwt = await singnIn(this.state.user);
      localStorage.setItem("token", jwt.data);
      window.location.href = `${window.location.origin}/movies`;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: ex.response.data });
      }
    }
  };
  onSubmitWithAccount = async () => {
    const jwt = await singnInWithAccount(this.state.user);
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
        email: response.profileObj.email,
        password: response.profileObj.googleId
      }
    });
    this.onSubmitWithAccount();
  };
  responseFacebook = response => {
    this.setState({
      user: {
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
                          <strong>Sign In</strong>
                        </h3>
                        <p>
                          Already have an account?
                          <a href="/register"> Please sign up now.</a>
                        </p>
                      </div>
                      <hr />
                      <div className="container">
                        <br />
                        <div style={{ textAlign: "center", color: "red" }}>
                          {this.state.errors}
                        </div>
                        <br />
                        <div className="row">
                          <div
                            className="col-6"
                            style={{ textAlign: "center" }}
                          >
                            <FacebookLogin
                              appId="2402789373313793"
                              autoLoad={false}
                              fields="name,email,picture"
                              textButton="Sing In"
                              cssClass="my-facebook-button-class"
                              icon={
                                <i
                                  className="fa fa-facebook-official fa-2x"
                                  aria-hidden="true"
                                  style={{
                                    marginRight: "15px"
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
                              buttonText="Sing In"
                              onSuccess={this.responseGoogle}
                              onFailure={this.responseGoogle}
                              cookiePolicy={"single_host_origin"}
                            />
                          </div>
                        </div>
                      </div>
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
                          Sign in
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

export default SingIn;
