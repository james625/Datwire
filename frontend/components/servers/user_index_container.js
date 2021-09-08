import { connect } from "react-redux";
import { createServer, fetchUserServers } from "../../actions/server_actions";
import { logout } from "../../actions/session_actions";
import UserIndex from "./user_index";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers)
    }
}

const mDTP = dispatch => {
    return {
        fetchUserServers: userId => dispatch(fetchUserServers(userId)),
        createServer: server => dispatch(createServer(server)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(UserIndex)