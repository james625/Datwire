import { connect } from "react-redux";
import { fetchUserServers } from "../../actions/server_actions";
import UserIndex from "./user_index";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers)
    }
}

const mDTP = dispatch => {
    return {
        fetchUserServers: userId => dispatch(fetchUserServers(userId))
    }
}

export default connect(mSTP, mDTP)(UserIndex)