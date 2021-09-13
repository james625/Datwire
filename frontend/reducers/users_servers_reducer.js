import { JOIN_SERVER, LEAVE_SERVER } from "../actions/users_server_actions"

const usersServersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case JOIN_SERVER:
            return Object.assign({}, state, { [action.usersServer.server_id]: action.usersServer })
        case LEAVE_SERVER:
            const newState = Object.assign({}, state)
            delete newState[action.server_id]
            return newState
        default:
            return state
    }
}

export default usersServersReducer;