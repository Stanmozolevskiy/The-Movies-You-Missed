import React from "react";

const Footer = () => {
  return (
    <div class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h4 style={{ marginTop: "3em" }}> Logo or image will be here </h4>
          </div>
          <div class="col-lg-3 col-sm-2 col-xs-3" style={{ marginTop: "4em" }}>
            <h3 > Contact </h3>
            <ul>
              <li>
                <a class="email" href="" >
                  insert email here
                </a>
              </li>
              <br />
              <li>
                <p> address line one </p>
              </li>
              <li>
                <p> address line two </p>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-2 col-xs-3">
            <ul>
              <li>                
                <h5>                
                  <a href="#" style={{ marginTop: "5em" }}> 
                    ABOUT US
                  </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="#"> CURRENT SERIES </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="#"> THE HOUSE </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href="#"> LOOKING BACK </a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
