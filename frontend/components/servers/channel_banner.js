import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

class ChannelBanner extends React.Component {

    render() {
        if (!this.props.channel) return null
        return (
            <div className="channel-banner-container">
                <FontAwesomeIcon icon={faHashtag} id="channel-banner-hashtag"/>
                <p className="channel-banner-name">{this.props.channel.name}</p>
            </div>
        )
    }
}

export default ChannelBanner;