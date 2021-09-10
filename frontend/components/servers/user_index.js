import React from "react";
import { Link } from "react-router-dom";
import Channel from "./channel";
import Server from "./server";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: "", modal: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id)
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createServer(this.state);
        this.setState({ name: "", modal: false });
    }

    handleModal(bool){
        return e => {
            e.preventDefault();
            this.setState({ modal: bool })
        }
    }

    render() {
        return(
            <div className="user-index">
                <ul className="servers-list">
                    <li className="server-list-item">
                        <Link to="/servers/@me"><img src={window.datwire} className="datwire-button"/></Link>
                    </li>
                    <p className="random-bar"></p>
                    {this.props.servers.map( server => {
                        return <UserIndexItem key={server.id} server={server} />
                    })}
                    <li className="server-list-item">
                        <button className="server-button add-server" onClick={this.handleModal(true)}>+</button>
                    </li>
                </ul>
                <div className={`modal-container ${ this.state.modal ? "modal-show" : ""}`}>
                    <div className="modal">
                        <form onSubmit={this.handleSubmit}>
                            <p className="modal-x" onClick={this.handleModal(false)}>&times;</p>
                            <p className="modal-customize">Create a server</p>
                            <label><p className="modal-label">SERVER NAME</p>
                                <input type="text" value={this.state.name} onChange={this.handleChange("name")} className="modal-input"></input>
                            </label>
                            <br/>
                            <button className={`modal-button ${this.state.name.length === 0 ? "button-down" : ""}`} 
                                    disabled={this.state.name.length === 0}>Create</button>
                        </form>
                    </div>
                </div>
                <button onClick={this.props.logout}>Log out</button>
                <Channel server={this.props.server} createChannel={this.props.createChannel} updateServer={this.props.updateServer} />
                <Server server={this.props.server} />
            </div>
        )
    }
}

export default UserIndex