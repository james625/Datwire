import React from "react";

class Message extends React.Component {

    componentDidUpdate(prevProps){
        if (prevProps.channelId !== this.props.channelId) {
            this.props.fetchChannelMessages(this.props.channelId)
        }
    }

    render() {
        if (!this.props.server) return null
        if (!this.props.channel) return null
        return (
            <div className="messages-container">
                <ul>
                    {this.props.messages.map( message => {
                        return (
                            <li key={message.id} className="message-list-item">
                                <p className="message-sender">
                                    {message.user.username}
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

export default Message;