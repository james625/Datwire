import * as messageUtils from "../util/message_util"

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const removeMessage = messageId => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const createMessage = message => dispatch => {
    return messageUtils.createMessage(message).then(message => dispatch(receiveMessage(message)))
}

export const deleteMessage = message => dispatch => {
    return messageUtils.deleteMessage(message).then(() => dispatch(removeMessage(message.id)))
}

export const fetchChannelMessages = channelId => dispatch => {
    return messageUtils.fetchChannelMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
}