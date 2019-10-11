import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

class ConfirmEmail extends Component {
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
                        <strong>Confirmation</strong>
                      </h3>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"></p>
                    <div className="row my-3 d-flex justify-content-center">
                      <h5>Please confirm your email</h5>
                      <br />
                      <br />
                      <div className="container">
                        <h6 style={{ textAlign: "center" }}></h6>
                        <br />
                      </div>
                    </div>
                    <div className="text-center mb-3"></div>
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

export default ConfirmEmail;
