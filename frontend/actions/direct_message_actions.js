import * as dmUtils from "../util/direct_message_util"

export const RECEIVE_DMS = 'RECEIVE_DMS'
export const RECEIVE_DM = 'RECEIVE_DM'
export const REMOVE_DM = 'REMOVE_DM'

const receiveDMs = messages => {
    return {
        type: RECEIVE_DMS,
        messages
    }
}

const receiveDM = message => {
    return {
        type: RECEIVE_DM,
        message
    }
}

const removeDM = messageId => {
    return {
        type: REMOVE_DM,
        messageId
    }
}

export const fetchChannelDMs = dmChannelId => dispatch => {
    return dmUtils.fetchChannelDMs(dmChannelId).then(messages => dispatch(receiveDMs(messages)))
}

export const createDM = message => dispatch => {
    return dmUtils.createDM(message).then(message => dispatch(receiveDM(message)))
}

export const deleteDM = message => dispatch => {
    return dmUtils.deleteDM(message).then(() => dispatch(removeDM(message.id)))
}