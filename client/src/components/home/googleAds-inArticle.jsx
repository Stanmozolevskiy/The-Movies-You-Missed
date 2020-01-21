import React, { Component } from "react";

class GoogleAdsInArticle extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className='ad'>
        <ins
          className="adsbygoogle adContent"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9427041283177019"
          data-ad-slot="2433443023" />
      </div>
    );
  }
}

export default GoogleAdsInArticle;