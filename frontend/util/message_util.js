export const createMessage = message => {
    return $.ajax({
        method: "post",
        url: "/api/messages",
        data: { message }
    })
}

export const deleteMessage = message => {
    return $.ajax({
        method: "delete",
        url: `/api/messages/${message.id}`
    })
}

export const fetchChannelMessages = channelId => {
    return $.ajax({
        method: "get",
        url: "/api/messages",
        data: { channelId }
    })
}