import React, { Component } from 'react';
import AdSense from 'react-adsense';

class GoogleAds extends Component {
    state = {}
    render() {
        return (<div>

            <AdSense.Google
                client='ca-pub-9427041283177019'
                slot='7806394673'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
        </div>);
    }
}

export default GoogleAds;