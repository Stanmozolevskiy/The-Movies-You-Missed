import React, { Component } from "react";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <ins
          className="adsbygoogle adContent"
          data-ad-client="ca-pub-9427041283177019"
          data-ad-slot="6060383760"
        ></ins>
      </div>
    );
  }
}

export default GoogleAds;
