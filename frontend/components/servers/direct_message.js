import React from "react";

class DirectMessage extends React.Component {

    render() {
        if (this.props.path !== "/servers/@me") return null
        return (
            <div className="direct-messages-container">

            </div>
        )
    }
}

export default DirectMessage;