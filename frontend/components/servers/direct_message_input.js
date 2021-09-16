import React from "react";
import consumer from "../../consumer";

class DirectMessageInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { input: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({ input: e.currentTarget.value })
    }



    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        if (!this.props.dmChannels) return null
        if (!this.props.dmChannel) return null
        return(
            <div className="server-message-input">
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