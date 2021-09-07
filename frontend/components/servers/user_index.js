import React from "react";
import { Link } from "react-router-dom";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id)
    }

    render() {
        return(
            <ul>
                {this.props.servers.map( server => {
                    return <UserIndexItem key={server.id} server={server} />
                })}
                <button>Add a Server</button>
            </ul>
        )
    }
}

export default UserIndex