import React from "react";
import consumer from "../../consumer";

class DirectMessageInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { input: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.subscription = null
    }

    componentDidMount(){
        this.subscribe()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.path !== this.props.path) {
            this.setState({ input: "" })
            this.subscription.unsubscribe()
            this.subscribe()
            this.props.fetchChannelDMs(this.props.dmChannelId)
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

    handleSubmit(e){
        e.preventDefault();
        this.subscription.send({
            message: {
                dm_channel_id: this.props.dmChannelId,
                author_id: this.props.currentUser.id,
                body: this.state.input
            }
        })
        this.setState({ input: "" })
    }

    subscribe() {
        this.subscription = consumer.subscriptions.create(
            { channel: "DirectMessageChannel", id: this.props.dmChannelId },
            {
                received: data => {
                    this.props.createDM(data.message)
                }
            }
        )
    }

    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        if (!this.props.dmChannels) return null
        if (!this.props.dmChannel) return null
        return(
            <div className="direct-message-input">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        className="message-input-box" 
                        placeholder={`Message #${this.props.dmChannel.user1_id === this.props.currentUser.id ? 
                                    this.props.dmChannel.user2.username : this.props.dmChannel.user1.username}`}
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    ></input>
                    <input type="submit" className="hidden-message-submit"></input>
                </form>
            </div>
        )
    }
}

export default DirectMessageInput;