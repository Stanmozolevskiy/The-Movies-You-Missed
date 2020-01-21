import React, { Component } from "react";

class GoogleAdsInArticle extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className='ad'>
        <ins class="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9427041283177019"
          data-ad-slot="2433443023"></ins>
      </div>
    );
  }
}

export default GoogleAdsInArticle;