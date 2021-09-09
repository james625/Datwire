import { connect } from "react-redux";
import { deleteServer, fetchUserServers } from "../../actions/server_actions";
import Server from "./server";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId]
    }
}

const mDTP = dispatch => {
    return {
        deleteServer: () => dispatch(deleteServer())
    }
}

// export default connect(mSTP, mDTP)(Server);