export const fetchServerChannels = serverId => {
    return $.ajax({
        method: "get",
        url: `/api/servers/${serverId}`
    })
}

export const fetchChannel = channel => {
    return $.ajax({
        method: "get",
        url: `/api/channels/${channel.id}`
    })
}

export const createChannel = (channel, server) => {
    return $.ajax({
        method: "post",
        url: `/api/servers/${server.id}/channels`,
        data: {channel}
    })
}

export const deleteChannel = (channel) => {
    return $.ajax({
        method: "delete",
        url: `/api/channels/${channel.id}`
    })
}

export const fetchChannels = () => {
    return $.ajax({
        method: "get",
        url: "/api/channels"
    })
}