import React from "react";

class MessageInput extends React.Component {

    render(){
        if (this.props.path === "/servers/explore") return null
        return(
            <div className={this.props.server ? "server-message-input" : "direct-message-input"}>
                <form>
                    <input 
                        type="text" 
                        className="message-input-box" 
                        placeholder={this.props.channel ? `Message #${this.props.channel.name}` : "Send Message"}
                    ></input>
                    {/* <input type="submit"></input> */}
                </form>
            </div>
        )
    }
}

export default MessageInput;