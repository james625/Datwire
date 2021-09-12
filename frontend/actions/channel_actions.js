import * as channelUtils from "../util/channel_util"

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

const receiveChannels = channels => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const receiveChannel = channel => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const removeChannel = id => {
    return {
        type: REMOVE_CHANNEL,
        id
    }
}

export const fetchServerChannels = serverId => dispatch => {
    return channelUtils.fetchServerChannels(serverId).then(channels => dispatch(receiveChannels(channels)))
}

export const fetchChannel = channel => dispatch => {
    return channelUtils.fetchChannel(channel).then(channel => dispatch(receiveChannel(channel)))
}

export const createChannel = (channel, server) => dispatch => {
    return channelUtils.createChannel(channel, server).then(channel => dispatch(receiveChannel(channel)))
}

export const deleteChannel = channel => dispatch => {
    return channelUtils.deleteChannel(channel).then(() => dispatch(removeChannel(channel.id)))
}

export const fetchChannels = () => dispatch => {
    return channelUtils.fetchChannels().then(channels =>dispatch(receiveChannels(channels)))
}

export const updateChannel = channel => dispatch => {
    return channelUtils.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)))
}