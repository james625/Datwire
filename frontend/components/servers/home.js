import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = { modal: false, id: "", channel: false, server: false, serverId: "", channelId: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleServerChange = this.handleServerChange.bind(this)
        this.handleServerJoin = this.handleServerJoin.bind(this)
        this.handleChannelChange = this.handleChannelChange.bind(this)
        this.handleChannelJoin = this.handleChannelJoin.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ id: e.currentTarget.value})
    }

    handleServerChange(e) {
        e.preventDefault();
        this.setState({ serverId: e.currentTarget.value})
    }

    handleChannelChange(e) {
        e.preventDefault();
        this.setState({ channelId: e.currentTarget.value})
    }

    handleModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ modal: field })
        }
    }

    handleChannelModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ channel: field })
        }
    }

    handleServerModal(field) {
        return e => {
            e.preventDefault();
            this.setState({ server: field })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if (parseInt(this.state.id)){
            if (parseInt(this.state.id) > this.props.currentUser.id) {
                this.props.createDmChannel({user1_id: this.props.currentUser.id, user2_id: parseInt(this.state.id) })
                // this.props.history.push(`/servers/@me/${this.props.currentUser.id}/${parseInt(this.state.id)}`)
                this.setState({ modal: false, id: "" })
            } else {
                this.props.createDmChannel({user2_id: this.props.currentUser.id, user1_id: parseInt(this.state.id) })
                // this.props.history.push(`/servers/@me/${parseInt(this.state.id)}/${this.props.currentUser.id}`)
                
            }
            this.setState({ modal: false, id: "" })
        }
    }

    handleServerJoin(e) {
        e.preventDefault();
        if (parseInt(this.state.serverId)) {
            this.props.createUsersServer( { user_id: this.props.currentUser.id, server_id: parseInt(this.state.serverId) })
            this.props.updateUser(this.props.currentUser)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.history.push(`/servers/${parseInt(this.state.serverId)}`)
            this.setState({ server: false, serverId: "" })
        } else {
            this.setState({ server: false, serverId: "" })
        }
    }

    handleChannelJoin(e) {
        e.preventDefault();
        let server = this.state.channelId.split("-")[0]
        let channel = this.state.channelId.split("-")[1]
        if (parseInt(server) && parseInt(channel)) {
            this.props.createUsersServer( { user_id: this.props.currentUser.id, server_id: parseInt(server) })
            this.props.updateUser(this.props.currentUser)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.history.push(`/servers/${parseInt(server)}/${parseInt(channel)}`)
            this.setState({ channel: false, channelId: "" })
        } else {
            this.setState({ channel: false, channelId: "" })
        }
    }

    render() {
        if (this.props.server) return null
        if (this.props.path === "/servers/explore") return null
        if (!this.props.dmChannels) return null
        return (
            <div className="dm-container">
                <button onClick={this.handleServerModal(true)} className="join-server-by-id">JOIN A SERVER</button> 
                <br></br>
                <button onClick={this.handleChannelModal(true)} className="join-server-channel-by-id">JOIN A CHANNEL</button>
                <div className="dm-container-header">
                    <p className="members-list-p">DIRECT MESSAGES</p>
                    <p id="plus" onClick={this.handleModal(true)}>+</p>
                </div>
                <ul className="channels-list">
                    {this.props.dmChannels.map( channel => {
                        return(
                            <li key={channel.id}>
                                <Link 
                                    to={`/servers/@me/${channel.user1_id}/${channel.user2_id}/${channel.id}`}
                                    className="channels-list-tag"
                                >
                                    {channel.user1_id === this.props.currentUser.id ? channel.user2.username : channel.user1.username}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={`modal-container ${ this.state.modal ? "modal-show" : ""}`}>
                    <div className="edit-channel-modal">
                        <form>
                            <p className="edit-modal-customize">Create DM</p>
                            <label><p className="modal-label">Please enter the ID # of the user you want to DM</p>
                                <input 
                                    type="text" 
                                    value={this.state.id} 
                                    onChange={this.handleChange}
                                    className="channel-modal-input"
                                >
                                </input>
                            </label>
                            <br/>
                            <div className="create-dm-buttons">
                                <p onClick={this.handleModal(false)} className="edit-channel-modal-cancel create-dm-cancel">Cancel</p>
                                <button onClick={this.handleSubmit} className="edit-channel-modal-button create-dm-create">Create DM</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`modal-container ${ this.state.server ? "modal-show" : ""}`}>
                    <div className="edit-channel-modal">
                        <form>
                            <p className="edit-modal-customize">Join an existing server</p>
                            <label><p className="modal-label">Please enter the ID # of the server you want to join</p>
                                <input 
                                    type="text" 
                                    value={this.state.serverId} 
                                    onChange={this.handleServerChange} 
                                    className="channel-modal-input"
                                    placeholder="eg. 1"
                                >
                                </input>
                            </label>
                            <br/>
                            <div className="create-dm-buttons">
                                <p onClick={this.handleServerModal(false)} className="edit-channel-modal-cancel create-dm-cancel">Cancel</p>
                                <button onClick={this.handleServerJoin} className="edit-channel-modal-button create-dm-create">Join</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`modal-container ${ this.state.channel ? "modal-show" : ""}`}>
                    <div className="edit-channel-modal">
                        <form>
                            <p className="edit-modal-customize">Join an existing channel</p>
                            <label><p className="modal-label">Please enter the ID # of the server and channel you want to join</p>
                                <input 
                                    type="text" 
                                    value={this.state.channelId} 
                                    onChange={this.handleChannelChange} 
                                    className="channel-modal-input"
                                    placeholder="serverID-channelID eg. 1-1"
                                >
                                </input>
                            </label>
                            <br/>
                            <div className="create-dm-buttons">
                                <p onClick={this.handleChannelModal(false)} className="edit-channel-modal-cancel create-dm-cancel">Cancel</p>
                                <button onClick={this.handleChannelJoin} className="edit-channel-modal-button create-dm-create">Join</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;