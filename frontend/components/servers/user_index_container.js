import { connect } from "react-redux";
import { createChannel, deleteChannel, fetchChannels, updateChannel } from "../../actions/channel_actions";
import { createDM, fetchChannelDMs } from "../../actions/direct_message_actions";
import { createDmChannel, fetchDmChannels } from "../../actions/dm_channel_actions";
import { createMessage, fetchChannelMessages } from "../../actions/message_actions";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { logout, updateUser } from "../../actions/session_actions";
import { createUsersServer, deleteUsersServer } from "../../actions/users_server_actions";
import UserIndex from "./user_index";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        path: ownProps.match.url,
        channelId: ownProps.match.params.channelId,
        messages: Object.values(state.entities.messages),
        params: ownProps.match.params,
        dmChannels: Object.values(state.entities.dmChannels),
        directMessages: Object.values(state.entities.directMessages),
        dmChannelId: ownProps.match.params.dmChannelId,
        dmChannel: state.entities.dmChannels[ownProps.match.params.dmChannelId],
        channels: Object.values(state.entities.channels)
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
        fetchChannels: () => dispatch(fetchChannels()),
        updateChannel: channel => dispatch(updateChannel(channel)),
        deleteChannel: channel => dispatch(deleteChannel(channel)),
        updateUser: user => dispatch(updateUser(user)),
        createUsersServer: usersServer => dispatch(createUsersServer(usersServer)),
        deleteUsersServer: usersServer => dispatch(deleteUsersServer(usersServer)),
        createMessage: message => dispatch(createMessage(message)),
        fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
        fetchChannelDMs: dmChannelId => dispatch(fetchChannelDMs(dmChannelId)),
        createDM: message => dispatch(createDM(message)),
        fetchDmChannels: userId => dispatch(fetchDmChannels(userId)),
        createDmChannel: channel => dispatch(createDmChannel(channel))
    }
}

export default connect(mSTP, mDTP)(UserIndex)