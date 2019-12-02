import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h4 style={{ marginTop: "3em" }}> Logo or image will be here </h4>
          </div>
          <div
            className="col-lg-3 col-sm-2 col-xs-3"
            style={{ marginTop: "4em" }}
          >
            <h3> Contact </h3>
            <ul>
              <li>
                <a className="email" href="">
                stanmozolevskiy@gmai.com
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
          <div className="col-lg-3 col-sm-2 col-xs-3">
            <ul>
              <li>
                <h5>
                  <a href="/about" style={{ marginTop: "5em" }}>
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
                  <a href="/policy"> PRIVACY </a>
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
