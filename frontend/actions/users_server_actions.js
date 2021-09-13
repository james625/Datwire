import * as usersServersUtils from "../util/users_servers_util"

export const JOIN_SERVER = 'JOIN_SERVER'
export const LEAVE_SERVER = 'LEAVE_SERVER'

const joinServer = usersServer => {
    return {
        type: JOIN_SERVER,
        usersServer
    }
}

const leaveServer = server_id => {
    return {
        type: LEAVE_SERVER,
        server_id
    }
}

export const createUsersServer = usersServer => dispatch => {
    return usersServersUtils.createUsersServer(usersServer).then(usersServer => dispatch(joinServer(usersServer)))
}

export const deleteUsersServer = usersServer => dispatch => {
    return usersServersUtils.deleteUsersServer(usersServer).then(() => dispatch(leaveServer(usersServer.server_id)))
}