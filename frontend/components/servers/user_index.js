import React from "react";
import { Link } from "react-router-dom";
import Channel from "./channel";
import ChannelBanner from "./channel_banner";
import DirectMessage from "./direct_message";
import DirectMessageInput from "./direct_message_input";
import Discover from "./discover";
import Explore from "./explore";
import Home from "./home";
import JoinServers from "./join_servers";
import Message from "./message";
import MessageInput from "./message_input";
import Server from "./server";
import ServerDropdown from "./server_dropdown";
import UserDropdown from "./user_dropdown";
import UserIndexItem from "./user_index_item";
import UserModule from "./user_module";

class UserIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: "", modal: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id)
        this.props.fetchChannels()
        this.props.fetchDmChannels(this.props.currentUser.id)
        this.props.updateUser(this.props.currentUser)
        if (this.props.channelId) {
            this.props.fetchChannelMessages(this.props.channelId)
        }
        if (this.props.dmChannelId) {
            this.props.fetchChannelDMs(this.props.dmChannelId)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.channelId && (this.props.channelId !== prevProps.channelId)) {
            this.props.fetchChannelMessages(this.props.channelId)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.fetchChannels()
        }
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
                    <Link to="/servers/explore" className="server-link compass-explore">
                        <i className="fas fa-compass"></i>
                    </Link>
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
                <div className="channel-banner-container"></div>
                <Home 
                    server={this.props.server}
                    path={this.props.path}
                    currentUser={this.props.currentUser}
                    history={this.props.history}
                    dmChannels={this.props.dmChannels}
                    createDmChannel={this.props.createDmChannel}
                    createUsersServer = {this.props.createUsersServer}
                    updateUser = {this.props.updateUser}
                />
                <Discover path={this.props.path}/>
                <Explore path={this.props.path}/>
                <JoinServers 
                    path={this.props.path} 
                    servers={this.props.currentUser.join_servers} 
                    createUsersServer = {this.props.createUsersServer}
                    currentUser = {this.props.currentUser}
                    updateUser = {this.props.updateUser}
                    fetchUserServers = {this.props.fetchUserServers}
                    history={this.props.history}
                />
                <UserDropdown 
                    path={this.props.path} 
                    currentUser={this.props.currentUser} 
                    server={this.props.server}
                    updateUser={this.props.updateUser}
                />
                <ServerDropdown 
                    server={this.props.server} 
                    currentUser={this.props.currentUser} 
                    updateServer={this.props.updateServer}
                    deleteServer={this.props.deleteServer}
                    deleteUsersServer = {this.props.deleteUsersServer}
                    updateUser = {this.props.updateUser}
                    fetchUserServers = {this.props.fetchUserServers}
                    history={this.props.history}
                />
                <ChannelBanner 
                    channel={this.props.channel} 
                    server={this.props.server} 
                    path={this.props.path}
                />
                <Channel 
                    server={this.props.server} 
                    createChannel={this.props.createChannel} 
                    updateServer={this.props.updateServer}
                    channel={this.props.channel}
                    updateChannel={this.props.updateChannel}
                    deleteChannel={this.props.deleteChannel}
                    channels={this.props.channels}
                    path={this.props.path}
                    history={this.props.history}
                />
                <Message 
                    server={this.props.server} 
                    channel={this.props.channel}
                    messages={this.props.messages}
                    channelId={this.props.channelId}
                    fetchChannelMessages={this.props.fetchChannelMessages}
                    fetchUserServers={this.props.fetchUserServers}
                    fetchChannels={this.props.fetchChannels}
                />
                <DirectMessage 
                    path={this.props.path} 
                    server={this.props.server}
                    dmChannelId={this.props.dmChannelId}
                    fetchChannelDMs={this.props.fetchChannelDMs}
                    directMessages={this.props.directMessages}
                />
                <MessageInput 
                    path={this.props.path} 
                    server={this.props.server} 
                    channel={this.props.channel}
                    currentUser={this.props.currentUser}
                    createMessage={this.props.createMessage}
                    updateChannel={this.props.updateChannel}
                    channelId={this.props.channelId}
                    fetchChannelMessages={this.props.fetchChannelMessages}
                />
                <DirectMessageInput
                    path={this.props.path} 
                    server={this.props.server} 
                    currentUser={this.props.currentUser}
                    dmChannel={this.props.dmChannel}
                    params={this.props.params}
                    dmChannels={this.props.dmChannels}
                    createDM={this.props.createDM}
                    fetchChannelDMs={this.props.fetchChannelDMs}
                    dmChannelId={this.props.dmChannelId}
                />
                <UserModule logout={this.props.logout} user={this.props.currentUser} />
                <Server server={this.props.server} />
            </div>
        )
    }
}

export default UserIndex