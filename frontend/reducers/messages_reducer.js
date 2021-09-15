import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions"

const messagesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_MESSAGES:
            return Object.assign({}, action.messages)
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message })
        case REMOVE_MESSAGE:
            const newState = Object.assign({}, state)
            delete newState[action.messageId]
            return newState
        default:
            return state
    }
}

export default messagesReducer;