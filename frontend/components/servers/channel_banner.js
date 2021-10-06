import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

class ChannelBanner extends React.Component {

    render() {
        if (!this.props.channel) return null
        return (
            <div className="channel-banner-container">
                <FontAwesomeIcon icon={faHashtag} id="channel-banner-hashtag"/>
                <p className="channel-banner-name">{this.props.channel.name} &nbsp;&nbsp;&nbsp;
                    Channel ID: {this.props.channel.id}
                </p>
            </div>
        )
    }
}

export default ChannelBanner;