import React from "react";
import { Link } from "react-router-dom";

class UserIndexItem extends React.Component {

    render() {
        return(
            <li>
                <Link to={`/servers/${this.props.server.id}`}>{this.props.server.name}</Link>
            </li>
        )
    }
}

export default UserIndexItem