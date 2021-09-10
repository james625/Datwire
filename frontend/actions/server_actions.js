import * as serverUtils from "../util/server_util"

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS'
export const RECEIVE_SERVER = 'RECEIVE_SERVER'
export const REMOVE_SERVER = 'REMOVE_SERVER'

const receiveServers = servers => {
    return {
        type: RECEIVE_SERVERS,
        servers
    }
}

const receiveServer = server => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

const removeServer = id => {
    return {
        type: REMOVE_SERVER,
        id
    }
}

export const fetchServers = () => dispatch => {
    return serverUtils.fetchServers().then(servers => dispatch(receiveServers(servers)))
}

export const fetchUserServers = userId => dispatch => {
    return serverUtils.fetchUserServers(userId).then(servers => dispatch(receiveServers(servers)))
}

export const fetchServer = server => dispatch => {
    return serverUtils.fetchServer(server).then(server => dispatch(receiveServer(server)))
}

export const createServer = server => dispatch => {
    return serverUtils.createServer(server).then(server => dispatch(receiveServer(server)))
}

export const deleteServer = server => dispatch => {
    return serverUtils.deleteServer(server).then(() => dispatch(removeServer(server.id)))
}

export const updateServer = server => dispatch => {
    return serverUtils.updateServer(server).then(server => dispatch(receiveServer(server)))
}
