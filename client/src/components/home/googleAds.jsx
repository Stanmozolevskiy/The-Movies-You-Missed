import React, { Component } from "react";

class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className='ad'>
        <ins
          className='adsbygoogle '
          style={{ display: "block", textAlign: "center", width: "100%", height: "auto" }}
          data-ad-client='ca-pub-9427041283177019'
          data-ad-slot='1719342757'
          // data-ad-format='auto'
          responsive="true"
        />
      </div>
    );
  }
}

export default GoogleAds;