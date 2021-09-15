export const createDM = message => {
    return $.ajax({
        method: "post",
        url: "/api/direct_messages",
        data: { message }
    })
}

export const fetchUserDMs = userId => {
    return $.ajax({
        method: "get",
        url: "/api/direct_messages",
        data: { userId }
    })
}

export const deleteDM = message => {
    return $.ajax({
        method: "delete",
        url: `/api/direct_messages/${message.id}`
    })
}