import React from "react";

class JoinServers extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    handleJoin(server) {
        return e => {
            e.preventDefault();
            this.props.createUsersServer( { user_id: this.props.currentUser.id, server_id: server.id })
            this.props.updateUser(this.props.currentUser)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.history.push(`/servers/${server.id}`)
        }
    }

    render() {
        if (this.props.path !== "/servers/explore") return null
        if (!this.props.servers) return null
        return (
            <div className="join-server-container">
                <ul className="join-server-list">
                    {this.props.servers.map( server => {
                        return ( 
                            <li key={server.id} className="join-server-list-item">
                                <p className="join-server-name">{server.name}</p>
                                <button onClick={this.handleJoin(server)} className="join-server-button">Join</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default JoinServers;