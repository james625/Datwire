import { RECEIVE_CURRENT_USER, LOGOUT } from "../actions/session_actions";

const sessionReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState[id] = action.user.id
            return newState
        case LOGOUT:
            newState[id] = null
            return newState
        default:
            return state
    }
}

export default sessionReducer;