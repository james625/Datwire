import * as dmChannelUtils from "../util/dm_channel_util"

export const RECEIVE_DMCHANNEL = 'RECEIVE_DMCHANNEL'
export const RECEIVE_DMCHANNELS = 'RECEIVE_DMCHANNELS'

const receiveDmChannel = channel => {
    return {
        type: RECEIVE_DMCHANNEL,
        channel
    }
}

const receiveDmChannels = channels => {
    return {
        type: RECEIVE_DMCHANNELS,
        channels
    }
}

export const createDmChannel = dm_channel => dispatch => {
    return dmChannelUtils.createDmChannel(dm_channel).then(channel => dispatch(receiveDmChannel(channel)))
}

export const fetchDmChannels = userId => dispatch => {
    return dmChannelUtils.fetchDmChannels(userId).then(channels => dispatch(receiveDmChannels(channels)))
}