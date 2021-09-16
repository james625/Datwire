import React from "react";

class DirectMessage extends React.Component {

    componentDidUpdate(prevProps){
        if (prevProps.dmChannelId !== this.props.dmChannelId) {
            this.props.fetchChannelDMs(this.props.dmChannelId)
        }
    }

    render() {
        if (this.props.path === "/servers/explore") return null
        if (this.props.path === "/servers/@me") {
            return (
                <div className="me-no-messages-container"></div>
            )
        }
        if (this.props.server) return null
        if (this.props.directMessages.length === 0) {
            return <div className="me-no-messages-container"></div>
        }
        return (
            <div className="direct-messages-container">
                <ul>
                    {this.props.directMessages.map( message => {
                        return (
                            <li key={message.id} className="message-list-item">
                                <p className="message-sender">
                                    {message.author.username}
                                    <span className="timestamp">
                                        {message.created_at.slice(5,7)}/
                                        {message.created_at.slice(8,10)}/
                                        {message.created_at.slice(0,4)}
                                    </span>
                                </p>
                                <p className="message-body">{message.body}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default DirectMessage;