import React, { Component } from "react";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="ad" style={{ padding: "20%" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "300px", height: "200px" }}
          data-ad-client="ca-pub-9427041283177019"
          data-ad-slot="6060383760"
        ></ins>
      </div>
    );
  }
}

export default GoogleAds;
