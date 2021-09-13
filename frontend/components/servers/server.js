import React from "react";
import ServerUserItem from "./server_user_item";


class Server extends React.Component {

    render(){
        if (!this.props.server) return null
        return(
            <div className="server-content-container">
                <div className="members-list">
                    <p className="members-list-p"> MEMBERS — {this.props.server.users.length + 1} </p>
                    <ul className="users-list">
                        <li>{this.props.server.creator.username} 👑</li>
                        {this.props.server.users.map( user => {
                            return <ServerUserItem user={user} key={user.id} />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Server;