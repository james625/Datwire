export const createUsersServer = users_server => {
    return $.ajax({
        method: "post",
        url: "/api/users_servers",
        data: { users_server }
    })
}

export const deleteUsersServer = users_server => {
    return $.ajax({
        method: "delete",
        url: `/api/users_servers/${users_server.id}`,
        data: { users_server }
    })
}