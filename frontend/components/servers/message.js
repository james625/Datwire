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
                            <li key={message.id}>
                                {message.body}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Message;