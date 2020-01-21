import React, { Component } from "react";

class GoogleAdsHorizontal extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className='ad'>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", margin: "auto", width: "auto", height: "auto" }}
          data-ad-client="ca-pub-9427041283177019"
          data-ad-slot="6060383760"
          data-ad-format="auto"
          data-full-width-responsive="true" />
      </div>
    );
  }
}

export default GoogleAdsHorizontal;