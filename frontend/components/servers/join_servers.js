import React from "react";

class JoinServers extends React.Component {

    render() {
        if (this.props.path !== "/servers/explore") return null
        if (!this.props.servers) return null
        return (
            <div className="join-server-container">
                <ul className="join-server-list">
                    {this.props.servers.map( server => {
                        return ( 
                            <li key={server.id} className="join-server-list-item">
                                <p>{server.name}</p>
                                <button>Join</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default JoinServers;