import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SERVERS:
            return Object.assign({}, action.servers)
        case RECEIVE_SERVER:
            return Object.assign({}, state, { [action.server.id]: action.server })
        case REMOVE_SERVER:
            const newState = Object.assign({}, state)
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export default serversReducer