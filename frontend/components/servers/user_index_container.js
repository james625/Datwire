import { connect } from "react-redux";
import { createChannel, fetchChannels } from "../../actions/channel_actions";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { logout } from "../../actions/session_actions";
import UserIndex from "./user_index";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId]
    }
}

const mDTP = dispatch => {
    return {
        fetchUserServers: userId => dispatch(fetchUserServers(userId)),
        createServer: server => dispatch(createServer(server)),
        logout: () => dispatch(logout()),
        deleteServer: server => dispatch(deleteServer(server)),
        createChannel: (channel, server) => dispatch(createChannel(channel, server)),
        updateServer: server => dispatch(updateServer(server)),
        fetchChannels: () => dispatch(fetchChannels())
    }
}

export default connect(mSTP, mDTP)(UserIndex)