import React from "react";
import { Link } from "react-router-dom";

class UserIndexItem extends React.Component {

    render() {
        return(
            <li className="server-list-item">
                <Link to={`/servers/${this.props.server.id}`} className="server-link">
                    <button className="server-button">{this.props.server.name[0]}</button>
                </Link>
            </li>
        )
    }
}

export default UserIndexItem