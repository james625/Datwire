import React from "react";

class ServerUserItem extends React.Component {

    render() {
        return (
            <li key={this.props.user.id}>
                {this.props.user.username}
            </li>
        )
    }
}

export default ServerUserItem;