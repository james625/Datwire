import React from "react";
import consumer from "../../consumer"

class MessageInput extends React.Component {

    constructor(props){
        super(props)
        this.state = { input: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.subscription = null
    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.path !== this.props.path) {
            this.setState({ input: "" })
            this.subscription.unsubscribe()
            this.subscribe()
            this.props.fetchChannelMessages(this.props.channelId)
        }
    }

    componentWillUnmount(){
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({ input: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.subscription.send({
            message: { 
                server_id: this.props.server.id, 
                author_id: this.props.currentUser.id,
                channel_id: this.props.channel.id,
                body: this.state.input
            }
        })
        this.props.fetchChannelMessages(this.props.channel.id)
        this.setState({ input: "" })
    }

    subscribe() {
        this.subscription = consumer.subscriptions.create(
            { channel: "ChatChannel", id: this.props.channelId },
            {
                received: data => {
                    this.props.createMessage(data.message)
                }
            }
        )
    }

    render(){
        if (this.props.path === "/servers/explore") return null
        if (!this.props.server) return null
        if (!this.props.channel) return null
        return(
            <div className="server-message-input">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        className="message-input-box" 
                        placeholder={`Message #${this.props.channel.name}`}
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    ></input>
                    <input type="submit" className="hidden-message-submit"></input>
                </form>
            </div>
        )
    }
}

export default MessageInput;