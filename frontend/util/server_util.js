export const createServer = server => {
    return $.ajax({
        method: "post",
        url: "/api/servers",
        data: {server}
    })
}

export const fetchServers = () => {
    return $.ajax({
        method: "get",
        url: "/api/servers"
    })
}

export const fetchUserServers = userId => {
    return $.ajax({
        method: "get",
        url: `/api/users/${userId}`
    })
}

export const fetchServer = server => {
    return $.ajax({
        method: "get",
        url: `api/servers/${server.id}`
    })
}

export const deleteServer = server => {
    return $.ajax({
        method: "delete",
        url: `/api/servers/${server.id}`
    })
}

export const updateServer = server => {
    return $.ajax({
        method: "patch",
        url: `/api/servers/${server.id}`,
        data: { server }
    })
}